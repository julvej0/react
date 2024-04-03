import React, { useState } from "react";
import "./checklist.css";

function Checklist() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <ul>
        <li>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            Title
          </label>
        </li>

        <li>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            Type
          </label>
        </li>

        <li>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            Publisher
          </label>
        </li>
        
        <li>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            Research Area
          </label>
        </li>
        <li>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            College
          </label>
        </li>
        <li>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            Quartile
          </label>
        </li>
        <li>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            Campus
          </label>
        </li>
        <li>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            SDG
          </label>
        </li>
        <li>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            Date Published
          </label>
        </li>
        <li>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            Authors
          </label>
        </li>
        <li>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            Funding
          </label>
        </li>
        <li>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            Fund Type
          </label>
        </li>
        <li>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            Fund Source
          </label>
        </li>
        <li>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            Citations
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Checklist;
