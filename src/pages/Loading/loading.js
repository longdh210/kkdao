import "./loading.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

function Loading({ LoadingToWrap }) {
    const [value, setValue] = useState(0);
    // const navigate = useNavigate();

    useEffect(() => {
        const timerId = setTimeout(() => {
            setValue(value + 1);
        }, 50);

        if (value == 100) {
            clearTimeout(timerId);
            // navigate("/introvideolandingpage");
            LoadingToWrap();
        }

        return () => clearTimeout(timerId);
    }, [value]);

    return (
        <motion.div
            className='loading'
            style={{ width: 200, height: 200 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -100 }}
        >
            <div>
                <CircularProgressbar
                    value={value}
                    maxValue={100}
                    text={value + "%"}
                    styles={buildStyles({
                        textColor: "#9EA0A3",
                        pathColor: "#9EA0A3",
                        trailColor: "#000000 20%",
                    })}
                    strokeWidth={3}
                />
            </div>
        </motion.div>
    );
}

export default Loading;
