import React from "react";
import "./VideoModal.css";

const VideoModal = ({ setVideoModalOpen }) => {
    document.onclick = (e) => {
        if (e.target.className === "video-modal") setVideoModalOpen(false);
    };
    return (
        <div className="video-modal">
            <div className="video-modal-container">
                <iframe
                    src="https://player.vimeo.com/video/360102741?h=943a2f1bef"
                    height="360"
                    frameBorder="0"
                    allow="autoplay; fullcreen; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoModal;
