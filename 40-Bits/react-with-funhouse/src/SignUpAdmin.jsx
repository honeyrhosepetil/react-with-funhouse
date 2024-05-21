import React from 'react';
import './App.css';
import gameLogo from './assets/img/game-header.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

function SignUpAdmin() {
  const handleCancel = () => {
    // Add your cancel logic here (e.g., clearing the form or navigating away)
    console.log('Cancel button clicked');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
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
          <form onSubmit={handleSubmit}>
            <div className="form-group-customer">
              <label htmlFor="firstname">First Name:</label>
              <input type="text" id="firstname" name="firstname" />
            </div>
            <div className="form-group-customer">
              <label htmlFor="lastname">Last Name:</label>
              <input type="text" id="lastname" name="lastname" />
            </div>
            <div className="form-group-customer">
              <label htmlFor="admin-email">Email:</label>
              <input type="text" id="email" name="email" />
            </div>
            <div className="form-group-customer">
              <label htmlFor="role">Role:</label>
              <select id="role" name="role">
                <option value="webmaster">Webmaster</option>
                <option value="manager">Manager</option>
                <option value="employee">Employee</option>
              </select>
            </div>
            <div className="form-group-customer">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="form-group-customer">
              <label htmlFor="password">Password:</label>
              <input type="text" id="password" name="password" />
            </div>
            <div className="button-group">
              <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
              <button type="submit" className="create-button">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpAdmin;