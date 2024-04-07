import React, { useState } from "react";
import "./login.css";
import bsulogo from "../../assets/images/batStateUNeu-logo.png";
import background from "../../assets/images/background_img.jpg";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // ush for shortcut
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [type, setType] = useState("password");
  const [type1, setType1] = useState("password");
  const [type2, setType2] = useState("password");
  const [displayModal, setDisplayModal] = useState(false);
  const navigate = useNavigate()
  
  const openModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  function togglePassword() {
    setIsOpen(!isOpen);
    if (isOpen == true) {
      setType("password");
    } else {
      setType("text");
    }
  }
  function togglePassword1() {
    setIsOpen1(!isOpen1);
    if (isOpen1 == true) {
      setType1("password");
    } else {
      setType1("text");
    }
  }
  function togglePassword2() {
    setIsOpen2(!isOpen2);
    if (isOpen2 == true) {
      setType2("password");
    } else {
      setType2("text");
    }
  }

  function handleSubmit(e){
   e.preventDefault()
   navigate("/admin/dashboard") 
  }
  return (
    <div className="LoginPage">
      <div id="whole_page">
        <img id="background" src={background} />
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
                  type={type}
                  minLength={8}
                  maxLength={16}
                />
                {isOpen ? (
                  <FaEye
                    onClick={togglePassword}
                    size={20}
                    className="toggle-password2"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={togglePassword}
                    size={20}
                    className="toggle-password2"
                  />
                )}
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
                  className="left-line"
                  style={{
                    flex: 1,
                    marginRight: 10,
                    borderTop: "1px solid gray",
                  }}
                />

                <label
                  className="or"
                  style={{ textAlign: "center", color: "gray" }}
                >
                  OR
                </label>
                <hr
                  className="right-line"
                  style={{
                    flex: 1,
                    marginLeft: 10,
                    borderTop: "1px solid gray",
                  }}
                />
              </div>
              <Link to="/signup">
                <input
                  type="button"
                  onClick=""// window.location.href='./../signup/sign-up.php
                  defaultValue="SIGN UP"
                />
              </Link>
              <label id="labelSignUp">
                Forgot Password?
                <a id="a_SignUp" onClick={openModal}>
                  &nbsp;Click Here!
                </a>
              </label>
              <br />
            </div>
          </form>
        </div>
      </div>
      {/*----------------------------------------------- HTML code for change password modal (forgot password) --------------------------------------------*/}
      
      <div id="myModal" className="modal" 
      style={{ display: displayModal ? "block" : "none" }}>
        <div className="modal-container">
          <h2 id="h2pass">Change Password</h2>
          <IoCloseOutline 
            onClick={closeModal}
            className="closes"
            size={30}
              style={{
                color:"white",
                float:"right" ,
                marginRight:"20px",
                marginTop:"-53px",
                cursor: "pointer"
              }}
          />
          {/* <span className="close">×</span> */}
          <form
            id="change-password-form"
            action="" // sample_db/change-password.php
            method="POST"
          >
            <label htmlFor="current-password" className="labelSubHeader2">
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
            <label htmlFor="new-password" className="labelSubHeader3">
              New Password:
            </label>
            <div className="password-container2">
              <input
                type={type1}
                className="passwordInput"
                name="new-password"
                minLength={8}
                maxLength={16}
                required=""
              />
              {isOpen1 ? (
                  <FaEye
                    onClick={togglePassword1}
                    size={20}
                    className="toggle-password"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={togglePassword1}
                    size={20}
                    className="toggle-password"
                  />
                )}
            </div>
            <label htmlFor="confirm-password" className="labelSubHeader4">
              Confirm Password:
            </label>
            <div className="password-container2">
              <input
                type={type2}
                id="confirmPasswordInput"
                name="confirm-password"
                minLength={8}
                maxLength={16}
                required=""
              />
              {isOpen2 ? (
                  <FaEye
                    onClick={togglePassword2}
                    size={20}
                    className="toggle-password"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={togglePassword2}
                    size={20}
                    className="toggle-password"
                  />
                )}
            </div>
            <span
              id="passwordTooltip"
              style={{ display: "none", color: "red" }}
            />
            <button
              name="confirm"
              type="button"
              id="submit-password"
              onClick={handleSubmit}
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
