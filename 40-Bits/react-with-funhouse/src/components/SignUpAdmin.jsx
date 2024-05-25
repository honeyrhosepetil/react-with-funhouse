import React, { useState } from 'react';
import "../App.css";
import gameLogo from '../assets/img/game-header.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function SignUpAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/signup");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="sign-up-container">
      <div className="left-regis-container">
        <img src={gameLogo} alt="Game Logo" className="game-logo" />
      </div>
      
      <div className="right-regis-admin-container">
        <div className="header">
          <h1>Welcome to 40-Bit</h1>
          <p>Log In to your existing account.</p>
        </div>
        <div className="customer-sign-up">
          <form onSubmit={handleSubmit}>
            <div className="form-group-admin">
            
            <div className="form-group-customer">
              <label htmlFor="email"> Email: </label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group-customer password-container">
              <label htmlFor="password">Password:</label>
              <input type={showPassword ? "text" : "password"} id="password-admin" name="password" placeholder="Enter your password" required />
              <button type="button" onClick={togglePasswordVisibility} className="password-admin-toggle-button">
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            </div>
            <div className="button-group">
              <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="create-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpAdmin;
