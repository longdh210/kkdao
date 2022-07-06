import React from "react";

const VideoPreview = ({ videoSrc, onSetIsDone }) => {
    console.log(videoSrc);
    return (
        <video
            src={videoSrc}
            autoPlay
            muted
            // preload='auto'
            onEnded={() => onSetIsDone()}
            id='intro-video'
        />
    );
};

export default React.memo(VideoPreview);
