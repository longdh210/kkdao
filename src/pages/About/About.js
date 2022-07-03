import { useNavigate } from "react-router-dom";
import SocialButtons from "../../components/SocialButtons";
import BackButton from "../../assets/back-button.svg";
import Rock01 from "../../assets/KKDAO_Rock/Rock01.png";
import Rock02 from "../../assets/KKDAO_Rock/Rock02.png";
import Rock03 from "../../assets/KKDAO_Rock/Rock03.png";

import "./About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="rootContainer">
      <div id="backgroundContainer">
        <div id="rockHeaderContainer">
          <SocialButtons leftIcon={<BackIcon />} />
          <img src={Rock02} alt="Rock02" id="rock2" />
        </div>

        <div className="footer">
          <img src={Rock01} alt="Rock01" id="rock1" />
          <img src={Rock03} alt="Rock03" id="rock3" />
        </div>
      </div>

      <div id="introContainer">
        <h1 id="title">ABOUT THE PROJECT</h1>
        <div id="subtitleContainer">
          <p id="subtitle">
            <b>KK DAO is the first DAO run by a VC firm in Southeast Asia.</b>{" "}
            We believe that KK DAO can create opportunities for next generation
            talent in Web 3.0 in developing countries, support the underserved
            talent in emerging markets. We build, support, and invest in early
            blockchain-agnostic startups in the area, DAOs, DeFi, CeFi
            (centralized finance), Web3 Apps, Infrastructure, Wallet, Gaming,
            and NFT.
          </p>
          <button id="shareInnovationBtn" onClick={() => navigate("/investor")}>
            <b>Share your innovation here!</b>
          </button>
        </div>
      </div>
    </div>
  );
};

const BackIcon = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        src={BackButton}
        alt="BackIcon"
        className="backIcon"
        onClick={() => navigate(-1)}
      />
    </div>
  );
};

export default About;
