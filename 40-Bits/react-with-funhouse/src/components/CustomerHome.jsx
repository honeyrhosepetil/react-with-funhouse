import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faShoppingCart, faRightFromBracket, faSearch } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import './index.css';
import './App.css';
import GameLogo from './assets/img/game-header.png'; 
import HeaderHome from './assets/img/header-home.png';
import HeaderHomeSecond from './assets/img/header-home-second.png';
import HeaderHomeThird from './assets/img/header-home-third.png';
import HeaderHomeFourth from './assets/img/header-home-fourth.png';

function CustomerHome() {
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

  const handleGenreMouseEnter = () => {
    setIsGenreDropdownOpen(true);
  };

  const handleGenreMouseLeave = () => {
    setIsGenreDropdownOpen(false);
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
            <a href="#" className="genre-link">Genre</a>
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
        <div className="card-container-customer">
          <div className="card-customer">
              <img src={''} alt="Profile" className="rectangle-image" />

            <div className="check-out-button">
              <div className="check-out">
                <h1>Title: </h1>
                <p>Genre: </p>
                <a href="#" className='button-check-out'>
                <FontAwesomeIcon icon={faShoppingCart}/> Check Out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerHome;