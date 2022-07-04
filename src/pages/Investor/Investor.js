import "./Investor.css";
import BackgroundVideo from "./../../assets/video/Section3BG.mov";
import { useState } from "react";
import Rock4 from "./../../assets/KKDAO_Rock/Rock04.png";
import Rock5 from "./../../assets/KKDAO_Rock/Rock05.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Investor = ({ goToSignUp }) => {
  const [isDone, setIsDone] = useState(false);

  // const navigate = useNavigate();

  return (
    <motion.div
      id="investor-root-container"
      drag="x"
      // onDragEnd={() => {
      //   navigate("/signup");
      // }}
    >
      <div id="investor-rocks-layer">
        <img src={Rock4} alt="Rock4" id="investor-rock4" />
        <img src={Rock5} alt="Rock5" id="investor-rock5" />
      </div>
      <video
        src={BackgroundVideo}
        autoPlay
        muted
        onEnded={() => setIsDone(true)}
        id="investor-video"
      />

      {isDone && (
        <div id="infoContainer">
          <motion.h1
            onClick={() => goToSignUp()}
            id="titleText"
            initial={{
              opacity: 0,
              x: -50,
              transitionDuration: "1s",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
          >
            MISTLETOE
          </motion.h1>
          <motion.p
            id="subtitleText"
            initial={{
              opacity: 0,
              y: 100,
              transitionDuration: "0.5s",
              transitionDelay: "1s",
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            Mistletoe is a venture capital firm that prefers to invest in start
            up companies. The firm seeks to invest in the education, software
            and support sectors. It is based in Tokyo, Japan and was founded in
            2013.
          </motion.p>
          <motion.p
            id="largeTitle"
            initial={{
              opacity: 0,
              x: -50,
              transitionDuration: "1.5s",
              transitionDelay: "2s",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
          >
            THE INVESTOR
          </motion.p>
        </div>
      )}
    </motion.div>
  );
};

export default Investor;
