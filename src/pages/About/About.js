import SocialButtons from "../../components/SocialButtons";
import BackButton from "../../assets/back-button.svg";
import Rock01 from "../../assets/KKDAO_Rock/Rock01.png";
import Rock02 from "../../assets/KKDAO_Rock/Rock02.png";
import Rock03 from "../../assets/KKDAO_Rock/Rock03.png";
import { motion } from "framer-motion";

import "./About.css";

const About = ({ goToFocus }) => {
    return (
        <motion.div className='about-root-container'>
            <div id='backgroundContainer'>
                <div id='rockHeaderContainer'>
                    <SocialButtons leftIcon={<BackIcon />} />
                    <img src={Rock02} alt='Rock02' id='about-rock2' />
                </div>

                <div className='footer'>
                    <img src={Rock01} alt='Rock01' id='about-rock1' />
                    <img src={Rock03} alt='Rock03' id='about-rock3' />
                </div>
            </div>

            <div id='introContainer'>
                <motion.h1
                    id='title'
                    initial={{
                        opacity: 0,
                        transitionDuration: "1s",
                    }}
                    transition={{ duration: 1 }}
                    animate={{
                        opacity: 1,
                    }}
                >
                    ABOUT THE PROJECT
                </motion.h1>
                <motion.div
                    id='subtitleContainer'
                    initial={{
                        opacity: 0,
                        transitionDelay: "1.5s",
                        transitionDuration: "1s",
                    }}
                    animate={{
                        opacity: 1,
                    }}
                >
                    <p
                        id='subtitle'
                        style={{
                            fontFamily: "MontserratRegular",
                        }}
                    >
                        <b
                            style={{
                                fontFamily: "MontserratBold",
                                fontWeight: "bold",
                            }}
                        >
                            KK DAO is the first DAO run by a VC firm in
                            Southeast Asia.
                        </b>{" "}
                        We believe that KK DAO can create opportunities for next
                        generation talent in Web 3.0 in developing countries,
                        support the underserved talent in emerging markets. We
                        build, support, and invest in early blockchain-agnostic
                        startups in the area, DAOs, DeFi, CeFi (centralized
                        finance), Web3 Apps, Infrastructure, Wallet, Gaming, and
                        NFT.
                    </p>
                    <motion.button
                        id='shareInnovationBtn'
                        onClick={() => goToFocus()}
                        initial={{
                            opacity: 0,
                            transitionDelay: "2.5s",
                            transitionDuration: "1s",
                        }}
                        animate={{
                            opacity: 1,
                        }}
                    >
                        <b>Share your innovation here!</b>
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

const BackIcon = () => {
    return (
        <div>
            <img
                src={BackButton}
                alt='BackIcon'
                className='backIcon'
                style={{ width: "90%" }}
            />
        </div>
    );
};

export default About;
