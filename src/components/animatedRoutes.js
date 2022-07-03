import Loading from "../pages/Loading/loading";
import IntroVideoLandingPage from "../pages/IntroVideoLandingPage/introVideoLandingPage";
import { Routes, Route, useLocation } from "react-router-dom";

import SignUp from "../pages/SignUp/SignUp";
import Investor from "../pages/Investor/Investor";
import FocusPage from "../pages/Focus/focus";

import { AnimatePresence } from "framer-motion";
import About from "../pages/About/About";

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
        <Route path="focus" element={<FocusPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="focus" element={<FocusPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
