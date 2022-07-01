import EmailLogo from "../assets/Frame 2529.svg";
import TwitterLogo from "../assets/Frame 2530.svg";
import { useNavigate } from "react-router-dom";

const SocialButtons = ({ leftIcon }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="logo"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          zIndex: "20",
          justifyContent: "space-between",
        }}
      >
        {leftIcon}
        <div
          className="emailTwitter"
          style={{ marginTop: "20px", marginRight: "20px" }}
        >
          <img
            src={EmailLogo}
            alt="EmailLogo"
            className="emailLogo"
            style={{ width: "45%", marginBottom: "5%" }}
          />
          <img
            src={TwitterLogo}
            alt="TwitterLogo"
            className="twitterLogo"
            style={{ width: "55%" }}
            onClick={() => navigate("/about")}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;
