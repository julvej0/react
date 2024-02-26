import React from "react";
import "./signup.css"

const SignUp = () => {
  return (
    
    <div className="SignUpPage">
      {/*--------------------------------------------------------- sign up page --------------------------------------------------------*/}
      <div id="whole_page">
        {/* <img src="../../../assets/images/redspartan_logo.png" style="width: 150px; height: 170px; position: fixed; bottom: 0; right: 0; margin-bottom: 50px; margin-right: 25px; border-radius: 50% / 20%;"> */}
        {/*--------------------------------------------------------- sign up header ------------------------------------------------------*/}
        <div id="signup-container">
          <img
            src="./../../assets/images/batStateUNeu-logo.png"
            style={{
              width: 90,
              height: 90,
              position: "fixed",
              border: "solid 3px #cf102d",
              backgroundColor: "white",
              borderRadius: "50%",
              zIndex: 1,
              transform: "translate(-50%, -490%)",
              top: "50%",
              left: "50%",
            }}
          />
          <div id="container-header">
            <h2 id="h2Login">Create Account</h2>
          </div>
          <br />
          {/*--------------------------------------------------------- sign-up content -----------------------------------------------------*/}
          <form
            id="user_input"
            action="sample_db/create-account.php"
            method="POST"
          >
            <label className="labelSubHeader">FIRST NAME</label>
            <input id="fName" name="fName" placeholder="Juan" type="text" />
            <br />
            <div className="user-name">
              <div>
                <label className="labelSubHeader2">MIDDLE NAME</label>
                <input
                  id="mName"
                  name="mName"
                  placeholder="De Castro"
                  type="text"
                />
              </div>
              <div>
                <label className="labelSubHeader2">LAST NAME</label>
                <input
                  id="lName"
                  name="lName"
                  placeholder="De la Cruz"
                  type="text"
                />
              </div>
            </div>
            <br />
            <label className="labelSubHeader">SR CODE</label>
            <input
              id="srcode"
              name="srcode"
              placeholder="12-34567"
              type="text"
              maxLength={8}
            />
            <br />
            <label className="labelSubHeader">EMAIL</label>
            <input
              id="email"
              name="emailAddress"
              placeholder="example@g.batstate-u.edu.ph"
              type="text"
            />
            <span id="emailTooltip" style={{ display: "none", color: "red" }} />
            <br />
            <label className="labelSubHeader">PASSWORD</label>
            <div className="password_container">
              <input
                className="passwordInput"
                name="password1"
                placeholder="Password"
                type="password"
                minLength={8}
                maxLength={16}
              />
              <i className="toggle-password2 fas fa-eye-slash" />
            </div>
            <br />
            <label className="labelSubHeader">CONFIRM PASSWORD</label>
            <div className="password_container">
              <input
                id="confirmPasswordInput"
                name="password"
                placeholder="Confirm Password"
                type="password"
                minLength={8}
                maxLength={16}
              />
              <i className="toggle-password2 fas fa-eye-slash" />
            </div>
            <span
              id="passwordTooltip"
              style={{ display: "none", color: "red" }}
            />
            <br />
            <input
              name="submit"
              type="button"
              id="pass"
              defaultValue="SIGN UP"
              onclick="showModal()"
            />
            <br />
            <label id="labelSignUp">
              Already have an account?
              <a id="a_SignUp" href="../login/login.php">
                &nbsp;Sign In
              </a>
            </label>
            <br />
          </form>
          {/*---------------------------------------------- popup modal --------------------------------------------------------------------*/}
          <div id="myModal" className="modal" style={{ zIndex: 9999 }}>
            <div className="modal-container">
              <div id="modal-header">
                <h1>Confirm Account</h1>
              </div>
              <form
                id="form-container"
                action="email_ver/page/sendcode.php"
                method="POST"
              >
                <span className="close">×</span>
                <br />
                <br />
                <label className="labelSubHeader">NAME</label>
                <input
                  id="userFullName"
                  type="text"
                  name="name"
                  defaultValue=""
                />
                <label className="labelSubHeader">SR CODE</label>
                <input id="userSrCode" type="text" defaultValue="" />
                <label className="labelSubHeader">EMAIL</label>
                <input
                  id="userEmailAddressInput"
                  type="text"
                  name="email"
                  defaultValue=""
                />
                <input
                  id="confirmedPassword"
                  type="hidden"
                  name="password"
                  defaultValue=""
                />
                <br />
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
                <br />
                <button
                  name="confirm"
                  id="btnSubmit"
                  title="btnSubmit"
                  type="button"
                  onclick="signUpConfirmBtn()"
                >
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
