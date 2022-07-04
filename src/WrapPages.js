import { useState } from "react";
import Loading from "./pages/Loading/loading";
import LandingPage from "./pages/IntroVideoLandingPage/introVideoLandingPage";
import AboutPage from "./pages/About/About";
import FocusPage from "./pages/Focus/focus";
import InvestorPage from "./pages/Investor/Investor";
import SignUpPage from "./pages/SignUp/SignUp";

function WrapPages() {
    const [page, setPage] = useState(1);

    const LoadingToWrap = () => {
        setPage(2);
    };

    const ZoomToWrap = () => {
        setPage(3);
    };

    const AboutToWrap = () => {
        setPage(4);
    };

    const FocusToWrap = () => {
        setPage(5);
    };

    const InvestorToWrap = () => {
        setPage(6);
    };

    return (
        <div>
            {page == 1 ? (
                <Loading LoadingToWrap={LoadingToWrap}></Loading>
            ) : page == 2 ? (
                <LandingPage ZoomToWrap={ZoomToWrap}></LandingPage>
            ) : page == 3 ? (
                <AboutPage AboutToWrap={AboutToWrap}></AboutPage>
            ) : page == 4 ? (
                <FocusPage FocusToWrap={FocusToWrap}></FocusPage>
            ) : page == 5 ? (
                <InvestorPage InvestorToWrap={InvestorToWrap}></InvestorPage>
            ) : (
                <SignUpPage></SignUpPage>
            )}
        </div>
    );
}

export default WrapPages;
