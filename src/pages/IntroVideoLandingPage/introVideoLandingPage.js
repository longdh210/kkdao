import KKLogo from "../../assets/kkLogo.png";
import IntroVideo from "../../assets/video/1920x1080-Vien-da.mp4";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./introVideoLandingPage.css";
import SocialButtons from "../../components/SocialButtons";
import ZoomVideo from "../../assets/video/1920x1080-Zoom.mp4";

function IntroVideo1() {
    const [isDone, setIsDone] = useState(false);
    const [zoom, setZoom] = useState(false);
    const navigate = useNavigate();

    if (zoom == true)
        return (
            <div className='zoomAboutPage'>
                <video
                    id='video'
                    src={ZoomVideo}
                    autoPlay
                    muted
                    onEnded={() => navigate("/about")}
                />
            </div>
        );
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
            />
            {isDone ? (
                <div className='content'>
                    <SocialButtons leftIcon={<Logo />} />
                    <h1 className='title'>
                        K&nbsp;&nbsp;K&nbsp;&nbsp;D&nbsp;&nbsp;A&nbsp;&nbsp;O
                    </h1>
                    <div className='mainContent'>
                        <p>
                            FIRST DAO RUN BY A VC FIRM<br></br>IN SOUTHEAST ASIA{" "}
                        </p>
                    </div>
                    <div className='wrapButton'>
                        <button
                            id='button'
                            onClick={() => {
                                setZoom(true);
                            }}
                        >
                            STEP IN
                        </button>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

const Logo = () => (
    <div className='kklogo'>
        <img src={KKLogo} alt='KKLogo'></img>
    </div>
);

export default IntroVideo1;
