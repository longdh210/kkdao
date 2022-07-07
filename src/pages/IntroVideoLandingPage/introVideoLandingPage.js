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
    const [isDone, setIsDone] = useState(false);
    const [zoom, setZoom] = useState(false);

    const [coord, setCoord] = useState({ x: 0, y: 0 });
    const [currentImage, setCurrentImage] = useState(50);
    const handleMouseMove = (e) => {
        const pivot = 5;

        if (e.screenX - coord.x >= pivot) {
            if (currentImage === 100) return;
            setCurrentImage(currentImage + 1);
        } else if (coord.x - e.screenX >= pivot) {
            if (currentImage === 0) return;
            setCurrentImage(currentImage - 1);
        }
        setCoord({ x: e.screenX, y: e.screenY });
    };

    const onSetIsDone = () => {
        setIsDone(true);
    };

    const [onIntro, setOnIntro] = useState(true);
    const [onBackground, setOnBackground] = useState(false);
    const backgroundRef = useRef();
    const zoomRef = useRef();

    useEffect(() => {
        let media = new Audio(IntroVideo);
        if (backgroundRef.current) {
            media.onloadedmetadata = function () {
                setTimeout(() => {
                    setOnBackground(true);
                    backgroundRef.current.play();
                }, media.duration * 1000);
            };
        }
    }, [backgroundRef.current]);

    useEffect(() => {
        if (zoom && zoomRef.current) {
            console.log("1");
            zoomRef.current.play();
            setOnBackground(false);
        }
        console.log("playZoom", zoom);
    }, [zoom, zoomRef.current]);

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            className='intro'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            // drag="x"
        >
            {
                <div>
                    {onIntro && (
                        <video
                            src={IntroVideo}
                            autoPlay
                            muted
                            onEnded={() => {
                                setTimeout(() => {
                                    setOnIntro(false);
                                }, 10000);
                            }}
                            id='intro-video'
                        ></video>
                    )}
                    <video
                        ref={zoomRef}
                        src={ZoomVideo}
                        muted
                        className={`${zoom ? "visible" : "invisible"}`}
                        id='intro-video'
                        onEnded={() => onFinished()}
                    ></video>
                    <div
                        id='intro-center-rock-background'
                        className={`${onBackground ? "visible" : "invisible"}`}
                    >
                        <img
                            src={require(`../../assets/intro-rock-500x700/500x700\ Da\ tach\ nen_00` +
                                currentImage.toString().padStart(3, "0") +
                                ".png")}
                            alt='background'
                            id='intro-center-rock'
                        />
                        <video
                            ref={backgroundRef}
                            src={BackgroundVideo}
                            muted
                            id='intro-video'
                        ></video>
                        <motion.div
                            className='content'
                            initial={{
                                opacity: 0,
                                transition: { duation: 1 },
                                y: 100,
                            }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <SocialButtons leftIcon={<Logo />} />
                            <motion.h1
                                className='title'
                                initial={{
                                    opacity: 0,
                                    transition: { duation: 1 },
                                    y: 100,
                                }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                KKDAO
                            </motion.h1>
                            <div
                                className='rockLandingPage'
                                onClick={() => setZoom(true)}
                            ></div>
                            <motion.div
                                className='mainContent'
                                initial={{
                                    opacity: 0,
                                    // transition: {{ } },
                                    y: 100,
                                }}
                                transition={{ ease: "easeOut", duration: 2 }}
                                animate={{ opacity: 1, y: 0 }}
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
                            </motion.div>
                            <motion.div
                                className='wrapButton'
                                initial={{
                                    opacity: 0,
                                    transition: { duation: 2 },
                                    y: 100,
                                }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <button
                                    id='button'
                                    onClick={() => {
                                        setZoom(true);
                                    }}
                                >
                                    STEP IN
                                </button>
                            </motion.div>
                        </motion.div>
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
        <img
            src={KKLogo}
            alt='KKLogo'
            style={{ width: "75%", marginBottom: "35%" }}
        />
    </div>
);

export default LandingPage;
