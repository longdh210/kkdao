import "./Investor.css";
import BackgroundVideo from "./../../assets/video/Section3BG.mov";
import { useState, useRef, useEffect } from "react";
import Rock4 from "./../../assets/KKDAO_Rock/Rock04.png";
import Rock5 from "./../../assets/KKDAO_Rock/Rock05.png";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Logo from "../../assets/logoInvestor.svg";
import SocialButtons from "../../components/SocialButtons";
import BackButton from "../../assets/back-button.svg";

const logos = [Logo, Logo, Logo, Logo];

const Investor = ({ goToSignUp }) => {
  const [isDone, setIsDone] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setLogoIndex(next),
  };

  return (
    <motion.div
      id="investor-root-container"
      // drag='x'
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
        preload="auto"
        muted
        onEnded={() => {
          setIsDone(true);
          setTimeout(() => {
            setFirstLoad(false);
          }, 2000);
        }}
        id="investor-video"
      />

      {isDone && (
        <div id="infoContainer">
          <div className="socialButtonInvestor">
            <SocialButtons leftIcon={<BackIcon />}></SocialButtons>
          </div>
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
            M&nbsp;I&nbsp;S&nbsp;T&nbsp;L&nbsp;E&nbsp;T&nbsp;O&nbsp;E
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
          <motion.div
            className="carousel"
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
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className={
                    index === logoIndex ? "slide activeSlide" : "slide"
                  }
                >
                  <img
                    // ref={
                    //     logoIndex === 0 ? firstLogoRef : ""
                    // }
                    className={firstLoad === true ? "animate" : ""}
                    src={logo}
                    alt={logo}
                  ></img>
                </div>
              ))}
            </Slider>
          </motion.div>
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

const BackIcon = () => {
  return (
    <div>
      <img src={BackButton} alt="BackIcon" className="backIcon" />
    </div>
  );
};

export default Investor;
