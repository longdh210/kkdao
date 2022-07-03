import "./Investor.css";
import BackgroundVideo from "./../../assets/video/Section3BG.mov";
import { useState } from "react";
import Rock4 from "./../../assets/KKDAO_Rock/Rock04.png";
import Rock5 from "./../../assets/KKDAO_Rock/Rock05.png";

const Investor = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div id="rootContainer">
      <div id="rocksLayer">
        <img src={Rock4} alt="Rock4" id="rock4" />
        <img src={Rock5} alt="Rock5" id="rock5" />
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
          <h1 id="titleText">MISTLETOE</h1>
          <p id="subtitleText">
            Mistletoe is a venture capital firm that prefers to invest in start
            up companies. The firm seeks to invest in the education, software
            and support sectors. It is based in Tokyo, Japan and was founded in
            2013.
          </p>
          <p id="largeTitle">THE INVESTOR</p>
        </div>
      )}
    </div>
  );
};

export default Investor;
