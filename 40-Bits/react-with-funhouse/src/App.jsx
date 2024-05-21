import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUser, faCog, faList, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="flex h-screen">
      <div className="sidebar fixed left-5 top-7 w-24 h-[calc(100vh-70px)] bg-gray-200 flex flex-col justify-between p-0 rounded-2xl">
        <ul className="space-y-4 p-0 m-0 flex flex-col items-center">
          <li className="my-7">
            <img src="./src/assets/img/game-header.png" alt="Description of the image" className="w-20 h-20" />
          </li>
          <li className="my-7 text-yellow-500 text-2xl">
            <FontAwesomeIcon icon={faLightbulb} />
          </li>
          <li className="my-7 text-yellow-500 text-2xl">
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li className="my-7 text-yellow-500 text-2xl">
            <FontAwesomeIcon icon={faCog} />
          </li>
          <li className="my-7 text-yellow-500 text-2xl">
            <FontAwesomeIcon icon={faList} />
          </li>
          <li className="my-7 text-yellow-500 text-2xl">
            <FontAwesomeIcon icon={faBell} />
          </li>
        </ul>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-1/2">
          <input type="text" placeholder="Type something..." className="border rounded p-2 w-full pl-10" />
          <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 float: left" />

          <button className="sign-up-button absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-2 rounded-md">
            Sign Up
          </button>
          
      </div>
    </div>
  </div>

  );
}

export default App;








