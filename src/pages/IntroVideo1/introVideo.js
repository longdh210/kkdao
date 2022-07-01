import IntroVideo from "../../assets/video/1920x1080-Vien-da.mp4";
import { useState } from "react";
import "./introVideo.css";
import KKLogo from "../../assets/kkLogo.png";
import EmailLogo from "../../assets/Frame 2529.svg";
import TwitterLogo from "../../assets/Frame 2530.svg";

function IntroVideo1() {
    const [isDone, setIsDone] = useState(false);

    return (
        <div
            className='intro'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
        >
            <video
                src={IntroVideo}
                autoPlay
                muted
                onEnded={() => setIsDone(true)}
                id='video'
            ></video>
            {isDone ? (
                <div>
                    <div className='logo'>
                        <div className='kklogo'>
                            <img src={KKLogo} alt='KKLogo'></img>
                        </div>
                        <div className='emailTwitter'>
                            <img
                                src={EmailLogo}
                                alt='EmailLogo'
                                className='emailLogo'
                            ></img>
                            <img
                                src={TwitterLogo}
                                alt='TwitterLogo'
                                className='twitterLogo'
                            ></img>
                        </div>
                    </div>
                    <div className='content'></div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default IntroVideo1;
