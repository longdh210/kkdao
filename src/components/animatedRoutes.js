import Loading from "../pages/Loading/loading";
import IntroVideo1 from "../pages/IntroVideo1/introVideo";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Loading />}></Route>
                <Route path="/introvideo1" element={<IntroVideo1 />}></Route>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
