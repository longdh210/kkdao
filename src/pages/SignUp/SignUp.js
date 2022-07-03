import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rock5 from "../../assets/KKDAO_Rock/Rock05.png";
import Rock6 from "../../assets/KKDAO_Rock/Rock06.png";
import Rock7 from "../../assets/KKDAO_Rock/Rock07.png";
import Close from "../../assets/close.svg";

const SignUp = () => {
  const [isShowingForm, setIsShowingForm] = useState(false);

  return (
    <div id="sign-up-root-container">
      <div id="sign-up-rocks-layer">
        <img src={Rock5} alt="Rock5" id="signup-rock5" />
        <img src={Rock6} alt="Rock6" id="signup-rock6" />
        <img src={Rock7} alt="Rock7" id="signup-rock7" />
      </div>
      {isShowingForm ? (
        <Form setIsShowingForm={setIsShowingForm} />
      ) : (
        <div id="signUpWrapper">
          <h1 id="signup" onClick={() => setIsShowingForm(true)}>
            SIGN UP
          </h1>
        </div>
      )}
    </div>
  );
};

const Form = ({ setIsShowingForm }) => {
  const navigate = useNavigate();

  return (
    <div id="formContainer">
      <img
        src={Close}
        alt="Close Form"
        id="close"
        onClick={() => setIsShowingForm(false)}
      />
      <form id="formControl" action="/">
        <br />
        <h1 id="formTitle">SIGN UP</h1>
        <br />

        <input
          type="text"
          placeholder="Project name:"
          required
          className="formInput verticalInput"
        />
        <br />
        <div id="additionalInfoContainer">
          <input
            type="text"
            placeholder="Name:"
            required
            className="formInput horizontalInput"
          />
          <input
            type="text"
            placeholder="Email:"
            required
            className="formInput horizontalInput"
          />

          <input
            type="text"
            placeholder="Phone:"
            required
            className="formInput horizontalInput"
          />
        </div>
        <br />
        <textarea
          name="Project description"
          rows="5"
          cols="30"
          className="formInput"
          id="projectDescriptionInput"
          placeholder="Project Description"
        />
        <br />
        <input type="submit" value="SEND" id="sendBtn" />
      </form>
    </div>
  );
};

export default SignUp;
