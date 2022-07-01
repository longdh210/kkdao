import KKLogo from "../../assets/kkLogo.png";
import IntroVideo from "../../assets/video/1920x1080-Vien-da.mp4";
import { useState } from "react";
import "./introVideo.css";
import SocialButtons from "../../components/SocialButtons";

function IntroVideo1() {
  const [isDone, setIsDone] = useState(false);

  return (
    <div
      className="intro"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <video
        src={IntroVideo}
        autoPlay
        muted
        onEnded={() => setIsDone(true)}
        id="video"
      />
      {isDone ? <SocialButtons leftIcon={<Logo />} /> : <></>}
    </div>
  );
}

const Logo = () => (
  <div className="kklogo">
    <img src={KKLogo} alt="KKLogo"></img>
  </div>
);

export default IntroVideo1;
