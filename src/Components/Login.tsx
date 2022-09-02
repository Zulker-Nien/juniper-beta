import { observer } from "mobx-react-lite";
import "../Home.scss";
import PhoneInput from "react-phone-number-input";
import { useContext, useState } from "react";
import "react-phone-number-input/style.css";
import "./Comp.scss";
import Store from "../store";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const Login = () => {
  const store = useContext(Store);
  const { setLoader } = store;
  const navigate = useNavigate();

  const [value, setValue] = useState();
  const [showPass, setShowPass] = useState<boolean>(false);
  const handlePass = () => {
    setShowPass(!showPass);
  };
  const handleClick = () => {
    setValue(value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate("/package");
    setLoader();
  };
  return (
    <div className="homeCenter">
      <div className="loginContainer">
        <p>Login | Sign Up</p>
        <h2>Welcome to Juniper Jersey</h2>

        {/* Manual Login Form */}
        <form
          className="PhoneInputContainer"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <PhoneInput
            defaultCountry="SE"
            value={value}
            placeholder="Phone Number"
            onChange={handleClick}
            // enableAreaCodes={true}
            // disableInitialCountryGuess={true}
          />
          <div className="password">
            <input type={showPass ? "text" : "password"} />
            <p onClick={handlePass}>{showPass ? "Hide" : "Show"}</p>
          </div>
          <div className="capturePassword">
            <div className="rememberMe">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <div className="forgotPassword">
              <p>Forgot Password ?</p>
            </div>
          </div>
          <div className="privacyPolicy">
            <p>
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.{" "}
              <span>
                <u>Privacy Policy</u>
              </span>
            </p>
          </div>
          <button className="loginSubmit" type="submit" value="Continue">
            Continue
          </button>
        </form>
        {/* Manual Login Form */}

        {/* Line Break */}
        <div className="lineBreak">
          <hr />
          <p>or</p>
          <hr />
        </div>
        {/* Line Break */}
      </div>
    </div>
  );
};

export default observer(Login);
