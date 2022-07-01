import { motion } from "framer-motion";
import IntroVideo from "../../assets/video/1920x1080-Vien-da.mp4";

function IntroVideo1() {
    return (
        <div
            className="intro"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
        >
            <video autoPlay loop>
                <source src={IntroVideo} type="video/mp4"></source>
            </video>
        </div>
    );
}

export default IntroVideo1;
