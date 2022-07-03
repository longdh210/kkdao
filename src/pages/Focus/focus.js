import "./focus.css";
import Daos from "../../assets/Frame 54.svg";
import Defi from "../../assets/Frame 55.svg";
import Cefi from "../../assets/Frame 53.svg";
import Web3App from "../../assets/Frame 56.svg";
import NFT from "../../assets/Frame 54 (1).svg";
import Wallet from "../../assets/Frame 55 (1).svg";
import Infratructure from "../../assets/Frame 53 (1).svg";
import Gaming from "../../assets/Frame 56 (1).svg";

import DaosImg from "../../assets/DAOs.png";
import DefiImg from "../../assets/DeFi.png";
import CefiImg from "../../assets/CeFi.png";
import Web3Img from "../../assets/Web3-Apps.png";
import InfraImg from "../../assets/Infratructure.png";
import WalletImg from "../../assets/Walet.png";
import GamingImg from "../../assets/Gaming.png";
import NFTImg from "../../assets/NFT.png";

import Rock1 from "../../assets/KKDAO_Rock/Rock04.png";
import Rock2 from "../../assets/KKDAO_Rock/Rock03.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function FocusPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="focusPage"
      drag="x"
      onDragEnd={() => {
        navigate("/investor");
      }}
    >
      <div className="titleFocus">
        <div className="child">F O C U S &nbsp;P R O J E C T</div>
        <div className="child2">
          <img className="rock1" src={Rock1}></img>
        </div>
      </div>
      <div className="row1">
        <div className="pillar">
          <img className="daosImg" src={DaosImg}></img>
          <img className="daos" src={Daos}></img>
        </div>
        <div className="pillar">
          <img className="daosImg" src={DefiImg}></img>
          <img className="daos" src={Defi}></img>
        </div>
        <div className="pillar">
          <img className="daosImg" src={CefiImg}></img>
          <img className="daos" src={Cefi}></img>
        </div>
        <div className="pillar">
          <img className="daosImg" src={Web3Img}></img>
          <img className="daos" src={Web3App}></img>
        </div>
      </div>
      <div className="row2">
        <div className="pillar">
          <img className="daosImg" src={InfraImg}></img>
          <img className="daos" src={Infratructure}></img>
        </div>
        <div className="pillar">
          <img className="daosImg" src={WalletImg}></img>
          <img className="daos" src={Wallet}></img>
        </div>
        <div className="pillar">
          <img className="daosImg" src={GamingImg}></img>
          <img className="daos" src={Gaming}></img>
        </div>
        <div className="pillar">
          <img className="daosImg" src={NFTImg}></img>
          <img className="daos" src={NFT}></img>
        </div>
      </div>
    </motion.div>
  );
}

export default FocusPage;
