import React from "react";

const VideoCallButton = () => {
  const startCall = () => {
    alert("Starting video consultation...");
  };

  return (
    <button className="video-call-btn" onClick={startCall}>
      📹 Start Video Call
    </button>
  );
};

export default VideoCallButton;
