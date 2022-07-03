import Loading from "../pages/Loading/loading";
import IntroVideoLandingPage from "../pages/IntroVideoLandingPage/introVideoLandingPage";
import ZoomAboutPage from "../pages/ZoomAboutPage/zoomAboutPage";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import About from "../pages/About/About";
import SignUp from "../pages/SignUp/SignUp";
import Investor from "../pages/Investor/Investor";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Loading />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/introvideolandingpage"
          element={<IntroVideoLandingPage />}
        />
        <Route path="zoomaboutpage" element={<ZoomAboutPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/investor" element={<Investor />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
