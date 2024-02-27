import React from "react";
import "./login.css"
import bsulogo from "../../assets/images/batStateUNeu-logo.png"
import background from "../../assets/images/background_img.jpg"
import { FaEyeSlash, FaEye  } from "react-icons/fa";


const Login = () => {
  return (
    <div className="LoginPage">
      <div id="whole_page">
        <img
          id="background"
          src={background}
        />
        {/* <div style="width: 155px; height: 230px; background-color: white; position: fixed; bottom: 0; right: 0; margin-bottom: 20px; margin-right: 20px; z-index: 1; padding: 20px; border-radius: 50% / 20%;">
  <img src="../../../assets/images/redspartan_logo.png" style="width: 150px; height: 160px; position: fixed; bottom: 0; right: 0; margin-bottom: 50px; margin-right: 25px; z-index: 2; border-radius: 50% / 20%;">
    </div> */}
        <img
          className="bsuLogo"
          src={bsulogo}
          style={{
            width: 110,
            height: 110,
            position: "fixed",
            border: "solid 3px #cf102d",
            backgroundColor: "white",
            borderRadius: "50%",
            zIndex: 1,
            transform: "translate(-50%, -280%)",
            top: "50%",
            left: "50%",
          }}
        />
        {/*--------------------------------------------------------- login header --------------------------------------------------------*/}
        <div id="login_container">
          <div id="container-header1">
            <h2 id="h2Login">SIGN IN</h2>
          </div>
          <br />
          <form id="user_input" action="" method="POST">
            <div className="formDiv">
              <label className="labelSubHeader">EMAIL</label>
              <input
                id="login_email"
                name="emailAddress"
                placeholder="example@g.batstate-u.edu.ph"
                type="text"
              />
              <br />
              <label className="labelSubHeader">PASSWORD</label>
              <div id="password_container">
                <input
                  id="login_password"
                  className="passwordInput"
                  name="password"
                  placeholder="Password"
                  type="password"
                  minLength={8}
                  maxLength={16}
                />
                <FaEyeSlash size={25} className="toggle-password2 fas fa-eye-slash" />
              </div>
              <br />
              <input name="login" type="submit" defaultValue=" LOGIN " />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <hr
                  style={{
                    flex: 1,
                    marginRight: 10,
                    borderTop: "1px solid gray",
                  }}
                />
                
                <label style={{ textAlign: "center", color: "gray" }}>OR</label>
                <hr
                  style={{
                    flex: 1,
                    marginLeft: 10,
                    borderTop: "1px solid gray",
                  }}
                />
              </div>
              <input
                type="button"
                onclick="window.location.href='./../signup/sign-up.php'"
                defaultValue="SIGN UP"
              />
              <label id="labelSignUp">
                Forgot Password?
                <a id="a_SignUp" onclick="showModal()">
                  &nbsp;Click Here!
                </a>
              </label>
              <br />
            </div>
          </form>
        </div>
      </div>
      {/*----------------------------------------------- HTML code for change password modal --------------------------------------------*/}
      <div id="myModal" className="modal">
        <div className="modal-container">
          <span className="close">×</span>
          <h2 id="h2pass">Change Password</h2>
          <form
            id="change-password-form"
            action="sample_db/change-password.php"
            method="POST"
          >
            <label htmlFor="current-password" className="labelSubHeader">
              Email:
            </label>
            <div className="password-container">
              <input
                type="text"
                id="userEmailAddressInput"
                name="email"
                placeholder="example@g.batstate-u.edu.ph"
                required=""
              />
            </div>
            <input
              id="otpVerification"
              type="text"
              name="otpBox"
              placeholder="Enter Your One Time Password"
              maxLength={6}
            />
            <button name="send" id="sendOtpLink" type="button">
              SEND OTP
            </button>
            <span id="emailTooltip" style={{ display: "none", color: "red" }} />
            <label htmlFor="new-password" className="labelSubHeader">
              New Password:
            </label>
            <div className="password-container">
              <input
                type="password"
                className="passwordInput"
                name="new-password"
                minLength={8}
                maxLength={16}
                required=""
              />
              <FaEyeSlash className="toggle-password fas fa-eye-slash" />
            </div>
            <label htmlFor="confirm-password" className="labelSubHeader">
              Confirm Password:
            </label>
            <div className="password-container">
              <input
                type="password"
                id="confirmPasswordInput"
                name="confirm-password"
                minLength={8}
                maxLength={16}
                required=""
              />
              <FaEyeSlash size={20} className="toggle-password fas fa-eye-slash" />
            </div>
            <span
              id="passwordTooltip"
              style={{ display: "none", color: "red" }}
            />
            <button
              name="confirm"
              type="button"
              id="submit-password"
              onclick="submitPss()"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
