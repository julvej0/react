import React from "react";
import "./forgotpassword.css"

const ForgotPassword = () => {
  return (
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
            <i className="toggle-password fas fa-eye-slash" />
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
            <i className="toggle-password fas fa-eye-slash" />
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
  );
};

export default ForgotPassword;
