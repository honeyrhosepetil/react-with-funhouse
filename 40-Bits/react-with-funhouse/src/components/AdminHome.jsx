import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faRightFromBracket, faSearch, faArrowUpWideShort, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import './index.css';
import './App.css';
import GameLogo from './assets/img/game-header.png'; 
import HeaderHome from './assets/img/header-home.png';
import HeaderHomeSecond from './assets/img/header-home-second.png';
import HeaderHomeThird from './assets/img/header-home-third.png';
import HeaderHomeFourth from './assets/img/header-home-fourth.png';

function AdminHome() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleIconClick = (iconName) => {
    console.log(`${iconName} icon clicked`);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    arrows: false,
  };

  const [isGenreDropdownOpen, setIsGenreDropdownOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleGenreMouseEnter = () => {
    setIsGenreDropdownOpen(true);
  };

  const handleGenreMouseLeave = () => {
    setIsGenreDropdownOpen(false);
  };

  const handlePlusClick = () => {
    setIsAddModalOpen(true);
  };

  const handleUpdateDetailsClick = () => {
    setIsUpdateModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
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
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-1/2">
            <input type="text" placeholder="Type something..." className="border rounded p-2 w-full pl-10" />
            <button className="icon-button absolute left-3 top-1/2 transform -translate-y-1/2">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </button>
            <button onClick={handleSignUpClick} className="sign-up-button absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <Slider {...sliderSettings}>
        <div>
          <img src={HeaderHome} alt="Header Home 1" className="home-img" />
        </div>
        <div>
          <img src={HeaderHomeSecond} alt="Header Home 2" className="home-img" />
        </div>
        <div>
          <img src={HeaderHomeThird} alt="Header Home 3" className="home-img" />
        </div>
        <div>
          <img src={HeaderHomeFourth} alt="Header Home 4" className="home-img" />
        </div>
      </Slider>
      <div className="item-list">
        <div className="item-label">
          <h1>Available Games</h1>
        </div>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Latest</a>
          <a href="#" className="nav-link">All Games</a>
          <div 
            className="nav-link genre-dropdown" 
            onMouseEnter={handleGenreMouseEnter} 
            onMouseLeave={handleGenreMouseLeave}
          >
            <span className="genre-link">
              Genre <FontAwesomeIcon icon={faArrowUpWideShort} className="sort-icon" />
            </span>
            {isGenreDropdownOpen && (
              <div className="dropdown-content">
                <a href="#" className="dropdown-item">Action</a>
                <a href="#" className="dropdown-item">Adventure</a>
                <a href="#" className="dropdown-item">RPG</a>
                <a href="#" className="dropdown-item">Strategy</a>
                <a href="#" className="dropdown-item">Simulation</a>
              </div>
            )}
          </div>
        </nav>
        <div className="card-container">
          <div className="card">
              <img src={''} alt="Profile" className="rectangle-image" />
            <div className="info">
                <h1>Title: </h1>
                <p>Genre: </p>
                <p>Current Stock: </p>
                <p>Reorder point: </p>
                <p>Location: </p>
                <p>Receiving: </p>
                <p>Sales: </p>
                <p>Low Stock Alert: </p>
                <button className="button-update" onClick={handleUpdateDetailsClick}>Update Details</button>
            </div>
          </div>
        </div>

        <div className="create-delete">
            <button onClick={handlePlusClick}><FontAwesomeIcon icon={faPlus} /></button>
            <button><FontAwesomeIcon icon={faMinus} /></button>
        </div>
      </div>

      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseAddModal}>X</button>
            <h2>Add a New Game</h2>
            <div className="modal-body">
              <div className="image-upload">
                <label htmlFor="file-input">
                  <img src="https://via.placeholder.com/150" alt="Placeholder" className="upload-placeholder" />
                </label>
                <input id="file-input" type="file" className="file-input" />
              </div>
              <div className="add-text-fields">
                <div className="field-container">
                  <label>Title:</label>
                  <input type="text" className="modal-input" />
                </div>
                <div className="field-container">
                  <label>Genre:</label>
                  <input type="text" className="modal-input" />
                </div>
                <div className="field-container">
                  <label>Current Stock:</label>
                  <input type="number" className="modal-input" />
                </div>
                <div className="field-container">
                  <label>Reorder Point:</label>
                  <input type="number" className="modal-input" />
                </div>
                <div className="field-container">
                  <label>Location:</label>
                  <input type="text" className="modal-input" />
                </div>
                <div className="field-container">
                  <label>Receiving:</label>
                  <input type="text" className="modal-input" />
                </div>
                <div className="field-container">
                  <label>Sales:</label>
                  <input type="number" className="modal-input" />
                </div>
                <div className="field-container">
                  <label>Low Stock Alert:</label>
                  <input type="number" className="modal-input" />
                </div>
              </div>
            </div>
            <button className="button-check-out">Add this Game</button>
          </div>
        </div>
      )}

      {isUpdateModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseUpdateModal}>X</button>
            <h2>Update Game Details</h2>
            <div className="modal-body">
              <div className="image-upload">
                <label htmlFor="file-input-update">
                  <img src="https://via.placeholder.com/150" alt="Placeholder" className="upload-placeholder" />
                </label>
                <input id="file-input-update" type="file" className="file-input" />
              </div>
              <div className="add-text-fields">
                <div className="field-container">
                  <label>Title:</label>
                  <input type="text" className="modal-input" />
                </div>
                <div className="field-container">
                  <label>Genre:</label>
                  <input type="text" className="modal-input" />
                </div>
                <div className="field-container">
                  <label>Current Stock:</label>
                  <input type="number" className="modal-input" />
                </div>
                <div className="field-container">
                  <label>Reorder Point:</label>
                  <input type="number" className="modal-input" />
                </div>
                <div className="field-container">
                  <label>Location:</label>
                  <input type="text" className="modal-input" />
                </div>
                <div className="field-container">
                  <label>Receiving:</label>
                  <input type="text" className="modal-input" />
                </div>
                <div className="field-container">
                  <label>Sales:</label>
                  <input type="number" className="modal-input" />
                </div>
                <div className="field-container">
                  <label>Low Stock Alert:</label>
                  <input type="number" className="modal-input" />
                </div>
              </div>
            </div>
            <button className="button-check-out">Update Game</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminHome;
