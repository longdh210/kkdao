import "./Investor.css";
import BackgroundVideo from "./../../assets/video/Section3BG.mov";
import { useState } from "react";

const Investor = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div id="rootContainer">
      <video
        src={BackgroundVideo}
        autoPlay
        muted
        onEnded={() => setIsDone(true)}
        id="video"
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
