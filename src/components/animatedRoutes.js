import Loading from "../pages/Loading/loading";
import IntroVideoLandingPage from "../pages/IntroVideoLandingPage/introVideoLandingPage";
import ZoomAboutPage from "../pages/ZoomAboutPage/zoomAboutPage";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Loading />}></Route>
                <Route path="/introvideolandingpage" element={<IntroVideoLandingPage />}></Route>
                <Route path="zoomaboutpage" element={<ZoomAboutPage/>}></Route>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
