import React from 'react';
import Logo from "/velovo_npg-removebg-preview.png";
import Home from '/home_png-removebg-preview.png';

function Header() {
  return (
    <header className="flex justify-between items-center h-12 bg-black w-[100%] fixed top-0 z-30">
      <img src={Logo} alt="Logo" className="h-11 mr-1  z-20" />
      <img src={Home} alt="Home" className="h-20 mr-3 mt-1 z-20" />
      <button className="bg-black bg-opacity-55 hover:bg-blue-700 hover:underline text-white font-bold py-1 px-2 rounded">
        Se Connecter
      </button>
    </header>
  );
}

export default Header;