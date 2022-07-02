import Zoom from "../../assets/video/1920x1080-Zoom.mp4";
import { useNavigate } from "react-router-dom";

function ZoomAboutPage() {
  const navigate = useNavigate();

  return (
    <div className="zoomAboutPage">
      <video
        id="video"
        src={Zoom}
        autoPlay
        muted
        onEnded={() => navigate("/about")}
      />
    </div>
  );
}

export default ZoomAboutPage;
