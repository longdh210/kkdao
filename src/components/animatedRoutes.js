import Loading from "../pages/Loading/loading";
import IntroVideo1 from "../pages/IntroVideo1/introVideo";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import About from "../pages/About/About";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Loading />} />
        <Route path="/introvideo1" element={<IntroVideo1 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
