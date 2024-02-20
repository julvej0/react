import React from "react";
import "./userProfile.css"

const UserProfile = () => {
  return (
    <div id="profile-page" className="mini-page">
      <div className="page-title">
        <h3 className="animate__animated animate__zoomIn">USER PROFILE</h3>
      </div>
      <div className="profile-info">
        <div className="profile-photo">
          <label htmlFor="photo-upload">
            <img
              id="user-image"
              src="<?php echo $user['user_img']; ?>"
              alt="User Image"
            />
          </label>
          <input
            type="file"
            id="photo-upload"
            name="file"
            style={{ display: "none" }}
          />
        </div>
        <div className="profile-details">
          <div className="profile-row">
            <label htmlFor="name">Given Name:</label>
            <input
              type="text"
              id="user_fname"
              defaultValue="<?php echo $user['user_fname']; ?>"
              readOnly=""
            />
            <button className="edit-button" onclick="editField('user_fname')">
              EDIT
            </button>
          </div>
          <div className="profile-row">
            <label htmlFor="name">Middle Name:</label>
            <input
              type="text"
              id="user_mname"
              defaultValue="<?php echo $user['user_mname']; ?>"
              readOnly=""
            />
            <button className="edit-button" onclick="editField('user_mname')">
              EDIT
            </button>
          </div>
          <div className="profile-row">
            <label htmlFor="name">Surname:</label>
            <input
              type="text"
              id="user_lname"
              defaultValue="<?php echo $user['user_lname']; ?>"
              readOnly=""
            />
            <button className="edit-button" onclick="editField('user_lname')">
              EDIT
            </button>
          </div>
          <div className="profile-row">
            <label htmlFor="contact">Contact Number:</label>
            <input
              type="text"
              id="user_contact"
              maxLength={11}
              defaultValue="<?php echo $user['user_contact'];?>"
              readOnly=""
            />
            <button className="edit-button" onclick="editField('user_contact')">
              EDIT
            </button>
          </div>
          <div className="profile-row">
            <label htmlFor="address">SR Code:</label>
            <input
              type="text"
              id="sr_code"
              defaultValue="<?php echo $user['sr_code'];?>"
              readOnly=""
            />
          </div>
          <div className="profile-row">
            <label htmlFor="affiliation">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue="<?php echo $user['email'];?>"
              readOnly=""
            />
          </div>
          <div className="profile-row">
            <label htmlFor="occupation">Account:</label>
            <input
              type="text"
              id="occupation"
              defaultValue="<?php echo $user['account_type'];?>"
              readOnly=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
