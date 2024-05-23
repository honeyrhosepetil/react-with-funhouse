import "../App.css"
import React from 'react';
import gameLogo from '../assets/img/game-header.png'

function SignUpCustomer() {
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
            <input type="text" id="firstname" name="firstname" />
          </div>
          <div className="form-group-customer">
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastname" />
          </div>
          <div className="form-group-customer">
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="password" />
          </div>
            <div className="button-group">
              <button type="button" className="cancel-button">Cancel</button>
              <button type="submit" className="create-button">Create</button>
            </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpCustomer;