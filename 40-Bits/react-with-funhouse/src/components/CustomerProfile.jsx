import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faRightFromBracket, faSearch, faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import GameLogo from './assets/img/game-header.png';

function CustomerProfile() {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Move this line to the top

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleIconClick = (iconName) => {
    console.log(`${iconName} icon clicked`);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageData = reader.result;
      setImage(imageData);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="flex h-screen">
        <div className="sidebar fixed left-5 top-7 w-24 h-[calc(100vh-70px)] bg-gray-200 flex flex-col justify-between p-0 rounded-2xl">
          <ul className="space-y-4 p-0 m-0 flex flex-col items-center">
            <li className="my-7">
              <img src={GameLogo} alt="Game Logo" className="w-20 h-20" />
            </li>
            <li className="my-7 text-yellow-500 text-2xl">
              <button onClick={() => handleIconClick('house')} className="icon-button">
                <FontAwesomeIcon icon={faHouse} />
              </button>
            </li>
            <li className="my-7 text-yellow-500 text-2xl">
              <button onClick={() => handleIconClick('user')} className="icon-button">
                <FontAwesomeIcon icon={faUser} />
              </button>
            </li>
            <li className="my-7 text-yellow-500 text-2xl">
              <button onClick={() => handleIconClick('log-out')} className="icon-button">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </button>
            </li>
          </ul>
        </div>
        
        <div className="edit-profile-container">
          <h1>Manage Profile</h1>
          <p>Edit your profile according to your preference.</p>
          <div className="profile">
            <div className="profile-picture-container">
              <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="upload-file" />
              <label htmlFor="upload-file" className="cursor-pointer">
                <FontAwesomeIcon icon={faPen} className="pen-icon" />
              </label>
              {image && <img src={image} alt="Profile" className="profile-picture" />}
            </div>
            <div className="profile-info">
              <div className="profile-handler">
                <label htmlFor="firstName" className="profile-label">First Name</label>
                <input type="text" id="firstName" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border rounded p-2 w-full mt-1" />
              </div>
              <div className="mt-4">
                <label htmlFor="lastName" className="profile-label">Last Name</label>
                <input type="text" id="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="border rounded p-2 w-full mt-1" />
              </div>
              <div className="mt-4 relative">
                <label htmlFor="password" className="profile-label">Password</label>
                <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded p-2 w-full mt-1" />
                <span className="eye-toggle" onClick={togglePasswordVisibility}>
                  {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                </span>
              </div>
              <div className="button-wrapper">
                <button className="update-account" onClick={handleSignUpClick}>Save Changes</button>
              </div>
            </div> 
          </div>
          <div className="delete-account-container">
            <h1>Delete Account</h1>
              <p>Once your account is deleted, all of its resources and data will be permanently deleted.
                  Before deleting your account, please download any information or data that you wish to retain.
              </p>
              <button className="delete-account" onClick={""}>Delete Account</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;