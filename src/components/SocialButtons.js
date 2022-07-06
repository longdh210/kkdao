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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {leftIcon}
        <div
          className="emailTwitter"
          style={{
            marginBottom: "15px",
          }}
        >
          <img
            src={EmailLogo}
            alt="EmailLogo"
            className="emailLogo"
            onClick={() => {
              window.open("mailto:info@kkfund.co?subject=Register");
            }}
            style={{
              width: "35%",
            }}
          />
          <img
            src={TwitterLogo}
            alt="TwitterLogo"
            className="twitterLogo"
            style={{
              width: "45%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;
