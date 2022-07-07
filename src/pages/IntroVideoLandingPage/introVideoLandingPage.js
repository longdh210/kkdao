import KKLogo from "../../assets/kkLogo.png";
import IntroVideo from "../../assets/video/1920x1080-Vien-da.mp4";
import { useState, useMemo, useEffect, useRef } from "react";
// import { use } from "react-router-dom";
import "./introVideoLandingPage.css";
import SocialButtons from "../../components/SocialButtons";
import ZoomVideo from "../../assets/video/1920x1080-Zoom.mp4";
import BackgroundVideo from "../../assets/video/1920x1080-BACKGROUND.mp4";
import { motion } from "framer-motion";
import VideoPreview from "../../components/VideoPreview";

function LandingPage({ onFinished }) {
    const [renderText, setRenderText] = useState(false);
    const [coord, setCoord] = useState({ x: 0, y: 0 });
    const [currentImage, setCurrentImage] = useState(50);
    const handleMouseMove = (e) => {
        if (coord.x < e.screenX) {
            if (currentImage === 100) return;
            setCurrentImage(currentImage + 1);
        } else if (coord.x > e.screenX) {
            if (currentImage === 0) return;
            setCurrentImage(currentImage - 1);
        }
        setCoord({ x: e.screenX, y: e.screenY });
    };

    // 0 : stage intro
    // 1 : show static background
    // 2 : show video background + content
    // 3 : start zoom
    const [stage, setStage] = useState(0);

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            className='intro'
            // initial={{ opacity: 0, x: 100 }}
            // animate={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: -100 }}
            // drag="x"
        >
            {
                <div>
                    {(stage == 0 || stage == 1) && (
                        <video
                            src={IntroVideo}
                            autoPlay
                            muted
                            onEnded={() => {
                                // setOnIntro(false);
                                setStage(1);
                                setTimeout(() => {
                                    // setDelayAfterIntro(true);
                                    setStage(2);
                                    setRenderText(true);
                                }, 100);
                            }}
                            id='intro-video'
                        ></video>
                    )}
                    <video
                        // ref={zoomRef}
                        src={ZoomVideo}
                        muted
                        className={`${stage == 3 ? "visible" : "invisible"}`}
                        id='intro-video-zoom'
                        onEnded={() => onFinished()}
                    >
                        {stage == 3
                            ? setTimeout(() => {
                                  var myVideo =
                                      document.getElementById(
                                          "intro-video-zoom"
                                      );
                                  myVideo.play();
                              }, 100)
                            : console.log("not run", stage)}
                    </video>
                    <div
                        id='intro-center-rock-background'
                        className={`${stage == 2 ? "visible" : "invisible"}`}
                    >
                        <img
                            src={require(`../../assets/intro-rock-500x700/500x700\ Da\ tach\ nen_00` +
                                currentImage.toString().padStart(3, "0") +
                                ".png")}
                            alt='background'
                            id='intro-center-rock'
                        />
                        <video
                            src={BackgroundVideo}
                            loop
                            autoPlay
                            muted
                            id='intro-video'
                        ></video>
                        {renderText && (
                            <motion.div className='content'>
                                <SocialButtons leftIcon={<Logo />} />
                                <motion.h1
                                    className='title'
                                    initial={{
                                        opacity: 0,
                                        y: 100,
                                        transitionDuration: "0s",
                                        transitionDelay: "0s",
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: -50,
                                    }}
                                    exit={{ opacity: 0 }}
                                >
                                    KKDAO
                                </motion.h1>
                                <div
                                    className='rockLandingPage'
                                    onClick={() => setStage(3)}
                                ></div>

                                <motion.div
                                    className='mainContent'
                                    initial={{
                                        opacity: 0,
                                        y: 100,
                                        transitionDuration: "0s",
                                        transitionDelay: "0s",
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    exit={{ opacity: 0 }}
                                >
                                    <p>
                                        <b style={{ fontFamily: "SFUFutura" }}>
                                            FIRST DAO
                                        </b>{" "}
                                        RUN BY A VC FIRM<br></br>IN{" "}
                                        <b style={{ fontFamily: "SFUFutura" }}>
                                            SOUTHEAST ASIA
                                        </b>{" "}
                                    </p>
                                    <motion.div
                                        className='wrapButton'
                                        // initial={{
                                        //     opacity: 0,
                                        //     transitionDelay: "2s",
                                        //     transitionDuration: "1s",
                                        //     y: 100,
                                        // }}
                                        // animate={{ opacity: 1, y: 0 }}
                                    >
                                        <button
                                            id='button'
                                            onClick={() => {
                                                setStage(3);
                                                console.log("run");
                                            }}
                                        >
                                            STEP IN
                                        </button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )}
                    </div>
                </div>
            }
        </motion.div>
    );
}

const Logo = () => (
    <div
        className='kklogo'
        onClick={() => (window.location.href = "https://www.kkfund.co/")}
    >
        <img src={KKLogo} alt='KKLogo' style={{ width: "75%" }} />
    </div>
);

export default LandingPage;
