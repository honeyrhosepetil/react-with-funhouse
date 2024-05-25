<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import gameLogo from '../assets/img/game-header.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
=======
import '../App.css';
import gameLogo from '../assets/img/game-header.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
>>>>>>> 00467892e1b5da05fab758fc51e7072f32b364bb

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="centered-box">
      <div className="left-container">
        <img src={gameLogo} alt="Game Logo" className="game-logo" />
      </div>
      <div className="right-container">
        <div className="header">
          <h1>Welcome Back!</h1>
          <p>Log In to your existing account.</p>
        </div>
        <form>
          <div className="form-field-email">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-field-pass">
            <label htmlFor="password">Password:</label>
            <input type={showPassword ? "text" : "password"} id="password-admin" name="password" placeholder="Enter your password" required />
            <button type="button" onClick={togglePasswordVisibility} className="password-toggle-button">
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <div className="sign-in-button">
            <button type="submit">Sign In</button>
          </div>
        </form>
        <div className="alternative-login">
          <p>or you can log in with</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faGoogle} className="icon" />
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <FontAwesomeIcon icon={faMicrosoft} className="icon" />
          </div>
          <p className="signup-text">
            Need an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;



