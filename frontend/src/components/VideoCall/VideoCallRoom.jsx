// src/components/VideoCall/VideoCallRoom.jsx
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

// Update URL if backend is deployed
const socket = io("http://localhost:5000"); 

const VideoCallRoom = ({ roomId }) => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);
  const remoteIdRef = useRef(null);

  const [myId, setMyId] = useState("");

  useEffect(() => {
    const setupMediaAndConnection = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localVideoRef.current.srcObject = stream;

      peerConnection.current = new RTCPeerConnection();

      // Send local tracks
      stream.getTracks().forEach(track => {
        peerConnection.current.addTrack(track, stream);
      });

      // Handle remote tracks
      peerConnection.current.ontrack = (event) => {
        remoteVideoRef.current.srcObject = event.streams[0];
      };

      // ICE Candidate sending
      peerConnection.current.onicecandidate = (event) => {
        if (event.candidate && remoteIdRef.current) {
          socket.emit("send-ice-candidate", {
            to: remoteIdRef.current,
            candidate: event.candidate,
          });
        }
      };
    };

    setupMediaAndConnection();

    // Socket connection setup
    socket.on("connect", () => {
      setMyId(socket.id);
      socket.emit("join-room", roomId);
    });

    socket.on("user-joined", async (remoteId) => {
      remoteIdRef.current = remoteId;

      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);

      socket.emit("send-offer", { to: remoteId, offer });
    });

    socket.on("receive-offer", async ({ offer, from }) => {
      remoteIdRef.current = from;

      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);

      socket.emit("send-answer", { to: from, answer });
    });

    socket.on("receive-answer", async ({ answer }) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socket.on("receive-ice-candidate", async ({ candidate }) => {
      try {
        await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
      } catch (err) {
        console.error("Error adding received ICE candidate", err);
      }
    });

    return () => {
      socket.disconnect();
      if (peerConnection.current) peerConnection.current.close();
    };
  }, [roomId]);

  return (
    <div className="video-call-room" style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div>
        <h3>Your Video</h3>
        <video ref={localVideoRef} autoPlay playsInline muted width="400" height="300" />
      </div>
      <div>
        <h3>Remote Video</h3>
        <video ref={remoteVideoRef} autoPlay playsInline width="400" height="300" />
      </div>
    </div>
  );
};

export default VideoCallRoom;
