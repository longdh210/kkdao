import KKLogo from "../../assets/kkLogo.png";
import IntroVideo from "../../assets/video/1920x1080-Vien-da.mp4";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./introVideoLandingPage.css";
import SocialButtons from "../../components/SocialButtons";
import ZoomVideo from "../../assets/video/1920x1080-Zoom.mp4";
import { motion } from "framer-motion";

function IntroVideo1() {
    const [isDone, setIsDone] = useState(false);
    const [zoom, setZoom] = useState(false);
    const navigate = useNavigate();

    if (zoom == true)
        return (
            <div className='zoomAboutPage'>
                <video
                    id='intro-video'
                    src={ZoomVideo}
                    autoPlay
                    muted
                    onEnded={() => navigate("/about")}
                />
            </div>
        );
    return (
        <motion.div
            className='intro'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            drag='x'
            onDragEnd={(event, info) => navigate("/about")}
        >
            <video
                src={IntroVideo}
                autoPlay
                muted
                onEnded={() => setIsDone(true)}
                id='intro-video'
            />
            {isDone ? (
                <motion.div
                    className='content'
                    initial={{ opacity: 0, transition: { duation: 1 }, y: 100 }}
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
                        K&nbsp;&nbsp;K&nbsp;&nbsp;D&nbsp;&nbsp;A&nbsp;&nbsp;O
                    </motion.h1>
                    <motion.div
                        className='mainContent'
                        initial={{
                            opacity: 0,
                            transition: { duation: 1.5 },
                            y: 100,
                        }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <p>
                            FIRST DAO RUN BY A VC FIRM<br></br>IN SOUTHEAST ASIA{" "}
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
            ) : (
                <></>
            )}
        </motion.div>
    );
}

const Logo = () => (
    <div className='kklogo'>
        <img src={KKLogo} alt='KKLogo'></img>
    </div>
);

export default IntroVideo1;
