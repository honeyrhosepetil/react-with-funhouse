import "../App.css"
import gameLogo from '../assets/img/game-header.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const navigate = useNavigate();

  const handleSignUpCustomerClick = () => {
    navigate("/signupcustomer");
  };
  const handleSignUpAdminClick = () => {
    navigate("/signupadmin");
  };
  return (
    <div className="sign-up-container">
      <div className="left-regis-container">
        <img src={gameLogo} alt="Game Logo" className="game-logo" />
      </div>
      
      <div className="right-regis-container">
        <div className="header">
          <h1>Welcome to 40-Bit</h1>
          <p>Sign Up to explore more.</p>
        </div>
        <div className="button-container">
          <button onClick={handleSignUpCustomerClick} className="role-button-customer">Customer</button>
          <button onClick={handleSignUpAdminClick} className="role-button-admin">Admin</button>
        </div>
        <div className="sign-in-link">
<<<<<<< HEAD
          <p>Already have an account? <a href="/signin">Sign In</a></p>
=======
          <p>Already have an account? <a href="/signin">Sign in</a></p>
>>>>>>> 00467892e1b5da05fab758fc51e7072f32b364bb
        </div>
      </div>
    </div>
  );
}

export default SignUp;