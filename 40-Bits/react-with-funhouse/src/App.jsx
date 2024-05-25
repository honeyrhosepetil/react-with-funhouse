import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faShoppingCart, faRightFromBracket, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import './App.css';
import { useNavigate } from 'react-router-dom';
import GameLogo from './assets/img/game-header.png'; // Correct path to the image
import HeaderHome from './assets/img/header-home.png';
import HeaderHomeSecond from './assets/img/header-home-second.png';
import HeaderHomeThird from './assets/img/header-home-third.png';
import HeaderHomeFourth from './assets/img/header-home-fourth.png';
import Slider from 'react-slick';


function App() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleIconClick = (iconName) => {
    console.log(`${iconName} icon clicked`);
    // Add navigation or other logic here if needed
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
              <button onClick={() => handleIconClick('shopping')} className="icon-button">
                <FontAwesomeIcon icon={faShoppingCart} />
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
      <Slider {...settings}>
        <div>
          <img src={HeaderHome} alt="Header Home 1" className="home-img" />
        </div>
        <div>
          <img src={HeaderHomeSecond} alt="Header Home 2" className="home-img" />
        </div>
        <div>
          <img src={HeaderHomeThird} alt="Header Home 2" className="home-img" />
        </div>
        <div>
          <img src={HeaderHomeFourth} alt="Header Home 2" className="home-img" />
        </div>
      </Slider>
    </div>
  );
}

export default App;










