import Loading from "../pages/Loading/loading";
import IntroVideoLandingPage from "../pages/IntroVideoLandingPage/introVideoLandingPage";
import ZoomAboutPage from "../pages/ZoomAboutPage/zoomAboutPage";
import FocusPage from "../pages/Focus/focus";
import { Routes, Route, useLocation } from "react-router-dom";

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
        <Route path="zoomaboutpage" element={<ZoomAboutPage />} />
        <Route path="focus" element={<FocusPage/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
