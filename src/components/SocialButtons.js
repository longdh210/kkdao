import EmailLogo from "../assets/Frame 2529.svg";
import TwitterLogo from "../assets/Frame 2530.svg";

const SocialButtons = ({ leftIcon }) => {
  return (
    <div>
      <div
        className="logo"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          zIndex: "20",
          marginRight: "20px",
          marginLeft: "20px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {leftIcon}
        <div className="emailTwitter">
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
          />
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;
