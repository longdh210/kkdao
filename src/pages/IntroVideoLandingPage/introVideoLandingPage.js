import KKLogo from "../../assets/kkLogo.png";
import IntroVideo from "../../assets/video/1920x1080-Vien-da.mp4";
import { useState } from "react";
// import { use } from "react-router-dom";
import "./introVideoLandingPage.css";
import SocialButtons from "../../components/SocialButtons";
import ZoomVideo from "../../assets/video/1920x1080-Zoom.mp4";
import BackgroundVideo from "../../assets/video/1920x1080-BACKGROUND.mp4";
import { motion } from "framer-motion";

function LandingPage({ onFinished }) {
  const [isDone, setIsDone] = useState(false);
  const [zoom, setZoom] = useState(false);

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

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="intro"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      // drag="x"
    >
      {isDone && zoom === false && (
        <div id="intro-center-rock-background">
          <img
            src={require(`../../assets/intro-rock-500x700/500x700\ Da\ tach\ nen_00` +
              currentImage.toString().padStart(3, "0") +
              ".png")}
            alt="background"
            id="intro-center-rock"
          />
          <video
            id="intro-video2"
            preload="auto"
            src={BackgroundVideo}
            autoPlay
            muted
            loop
            // onEnded={() => onFinished()}
          ></video>
        </div>
      )}

      {zoom && isDone && (
        <div className="zoomAboutPage">
          <video
            id="intro-video"
            src={ZoomVideo}
            preload="auto"
            autoPlay
            muted
            onEnded={() => onFinished()}
          />
        </div>
      )}
      {!isDone && !zoom && (
        <video
          src={IntroVideo}
          autoPlay
          muted
          preload="auto"
          onEnded={() => {
            setTimeout(() => {
              setIsDone(true);
            }, 100);
          }}
          id="intro-video"
        />
      )}
      {isDone && zoom === false && (
        <motion.div
          className="content"
          initial={{ opacity: 0, transition: { duation: 1 }, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <SocialButtons leftIcon={<Logo />} />
          <motion.h1
            className="title"
            initial={{
              opacity: 0,
              transition: { duation: 1 },
              y: 100,
            }}
            animate={{ opacity: 1, y: 0 }}
          >
            K&nbsp;&nbsp;K&nbsp;&nbsp;D&nbsp;&nbsp;A&nbsp;&nbsp;O
          </motion.h1>
          <div className="rockLandingPage" onClick={() => setZoom(true)}></div>
          <motion.div
            className="mainContent"
            initial={{
              opacity: 0,
              transition: { duation: 1.5 },
              y: 100,
            }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p>
              <b style={{ fontFamily: "SFUFutura" }}>FIRST DAO</b> RUN BY A VC
              FIRM<br></br>IN{" "}
              <b style={{ fontFamily: "SFUFutura" }}>SOUTHEAST ASIA</b>{" "}
            </p>
          </motion.div>
          <motion.div
            className="wrapButton"
            initial={{
              opacity: 0,
              transition: { duation: 2 },
              y: 100,
            }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              id="button"
              onClick={() => {
                setZoom(true);
              }}
            >
              STEP IN
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

const Logo = () => (
  <div
    className="kklogo"
    onClick={() => (window.location.href = "https://www.kkfund.co/")}
  >
    <img src={KKLogo} alt="KKLogo" style={{ width: "80%" }}></img>
  </div>
);

export default LandingPage;
