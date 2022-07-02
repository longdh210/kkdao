import IntroVideo from "../../assets/video/1920x1080-Vien-da.mp4";
import { useState } from "react";
import "./introVideoLandingPage.css";
import KKLogo from "../../assets/kkLogo.png";
import EmailLogo from "../../assets/Frame 2529.svg";
import TwitterLogo from "../../assets/Frame 2530.svg";
import { useNavigate } from "react-router-dom";

function IntroVideo1() {
    const [isDone, setIsDone] = useState(false);
    const navigate = useNavigate();

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
                    <div className='content'>
                        <h1 className="title">
                            K&nbsp;&nbsp;K&nbsp;&nbsp;D&nbsp;&nbsp;A&nbsp;&nbsp;O
                        </h1>
                        <div className="mainContent">
                            <p>FIRST DAO RUN BY A VC FIRM<br></br>IN SOUTHEAST ASIA </p>
                        </div>
                        <div className="wrapButton">
                            <button id="button" onClick={() => {navigate('/zoomaboutpage')}}>STEP IN</button>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default IntroVideo1;
