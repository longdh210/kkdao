import { useState } from "react";
import About from "../About/About";
import FocusPage from "../Focus/focus";
import Investor from "../Investor/Investor";
import SignUp from "../SignUp/SignUp";
import Loading from "../Loading/loading";

import "./PageWrapper.css";
import LandingPage from "../IntroVideoLandingPage/introVideoLandingPage";

import { useRef } from "react";
import { useHorizontalScroll } from "./../../components/useHorizontal";

const PageWrapper = () => {
  // const scrollRef = useHorizontalScroll();
  // Refs
  const focusRef = useRef(null);
  const investorRef = useRef(null);
  const signUpRef = useRef(null);

  const pageRefs = [
    {
      ref: focusRef,
      callback: () =>
        focusRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
    },
    {
      ref: investorRef,
      callback: () =>
        investorRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
    },
    {
      ref: signUpRef,
      callback: () =>
        signUpRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
    },
  ];

  // 0: Loading
  // 1: Video
  // 2: Landing Page
  const [currentPage, setCurrentPage] = useState(0);

  if (currentPage === 0) {
    return <Loading onFinished={() => setCurrentPage(1)} />;
  } else if (currentPage === 1) {
    return <LandingPage onFinished={() => setCurrentPage(2)} />;
  } else {
    return (
      <div>
        <div
          id="page-wrapper-root"
          // ref={scrollRef}
          // style={{ overflow: "auto" }}
        >
          <div className="page-container">
            <About goToFocus={() => pageRefs[0].callback()} />
          </div>
          <div className="page-container" ref={pageRefs[0].ref}>
            <FocusPage goToInvestor={() => pageRefs[1].callback()} />
          </div>
          <div className="page-container" ref={pageRefs[1].ref}>
            <Investor goToSignUp={() => pageRefs[2].callback()} />
          </div>
          <div className="page-container" ref={pageRefs[2].ref}>
            <SignUp />
          </div>
        </div>
      </div>
    );
  }
};

export default PageWrapper;
