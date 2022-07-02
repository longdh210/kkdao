import "./SignUp.css";
import { useState } from "react";
import Rock5 from "../../assets/KKDAO_Rock/Rock05.png";
import Rock6 from "../../assets/KKDAO_Rock/Rock06.png";
import Rock7 from "../../assets/KKDAO_Rock/Rock07.png";

const SignUp = () => {
  const [isShowingForm, setIsShowingForm] = useState(false);

  return (
    <div id="rootContainer">
      <div id="rocksLayer">
        <img src={Rock5} alt="Rock5" id="rock5" />
        <img src={Rock6} alt="Rock6" id="rock6" />
        <img src={Rock7} alt="Rock7" id="rock7" />
      </div>
      {isShowingForm ? (
        <Form />
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

const Form = () => {
  return (
    <form id="form" action="/">
      <h1 id="formTitle">SIGN UP</h1>
      <input type="text" placeholder="Project name:" required />
      <br />
      <input type="text" placeholder="Name:" required />
      <br />

      <div id="additionalInfoContainer">
        <input
          type="text"
          placeholder="Email:"
          required
          className="horizontalInput"
        />
        <input
          type="text"
          placeholder="Phone:"
          required
          className="horizontalInput"
        />
        <input
          type="text"
          placeholder="Project Description:"
          required
          className="horizontalInput"
        />
      </div>
      <br />

      <input type="submit" value="SEND" />
    </form>
  );
};

export default SignUp;
