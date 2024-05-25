import React, { useState } from 'react';
import "../App.css";
import gameLogo from '../assets/img/game-header.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function SignUpCustomer() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleCancel = () => {
    navigate("/signup");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="sign-up-container">
      <div className="left-regis-container">
        <img src={gameLogo} alt="Game Logo" className="game-logo" />
      </div>
      
      <div className="right-regis-customer-container">
        <div className="header">
          <h1>Welcome to 40-Bit</h1>
          <p>Sign Up to explore more.</p>
        </div>
        <div className="customer-sign-up">
          <form>
            <div className="form-group-customer">
              <label htmlFor="firstname">First Name:</label>
              <input type="text" id="firstname" name="firstname" placeholder="Enter your first name" required />
            </div>
            <div className="form-group-customer">
              <label htmlFor="lastname">Last Name:</label>
              <input type="text" id="lastname" name="lastname" placeholder="Enter your last name" required />
            </div>
            <div className="form-group-customer password-container">
              <label htmlFor="password">Password:</label>
              <input type={showPassword ? "text" : "password"} id="password-customer" name="password" placeholder="Enter your password" required />
              <button 
                type="button" 
                onClick={togglePasswordVisibility} 
                className="password-customer-toggle-button"
              >
                <FontAwesomeIcon 
                  icon={showPassword ? faEyeSlash : faEye} 
                />
              </button>
            </div>
            <div className="button-group">
              <button onClick={handleCancel} type="button" className="cancel-button">Cancel</button>
              <button type="submit" className="create-button">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpCustomer;
