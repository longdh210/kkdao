import Zoom from '../../assets/video/1920x1080-Zoom.mp4'

function ZoomAboutPage() {
    return (
        <div className='zoomAboutPage'>
            <video id='video' src={Zoom} autoPlay muted></video>
        </div>
    )
}

export default ZoomAboutPage;