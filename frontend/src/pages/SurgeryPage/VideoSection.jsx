import React from 'react';
import '../../styles/SurgeryPage/Surgery.css';

const VideoSection = () => {
  return (
    <div className="video-section-left">
      <h2 className="video-heading-left">End to end care explained</h2>
      <div className="video-container-left">
        <iframe
          width="640"
          height="400"
          src="https://www.youtube.com/embed/cmoqoTc3bgk?si=YiSKsoo1QP3qsyfF"
          title="End to End Care Explained"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="video-section-footer">
  We focus on providing you best experience<br />
  and support you at every step on your road to recovery
</div>

      </div>
    </div>
    
  );
};

export default VideoSection;
