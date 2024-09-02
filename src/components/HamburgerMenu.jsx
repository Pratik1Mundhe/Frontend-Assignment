import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <header className="bg-blue-500 shadow-md">
      <div className="container h-[100px] mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="#">MyBrand</a>
        </div>

        {/* Navigation */}
        <nav className=" md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition">
            Contact
          </a>
        </nav>


    <div className="relative m-10">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="text-gray-800 p-3 focus:outline-none"
      >
        <div className="space-y-2">
          <span
            className={`block w-8 h-1 bg-gray-800 transform transition-transform ${
              isOpen ? 'rotate-45 translate-y-3' : ''
            }`}
          />
          <span
            className={`block w-8 h-1 bg-gray-800 transition-opacity ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-8 h-1 bg-gray-800 transform transition-transform ${
              isOpen ? '-rotate-45 -translate-y-3' : ''
            }`}
          />
        </div>
      </button>

      {/* Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white flex flex-col justify-center items-center transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-[100%]'
        }`}
      >
  <ul className="space-y-8 text-2xl">
    <li>
      <a href="#" className="text-gray-800 hover:text-gray-500">
        Home
      </a>
    </li>
    <li>
      <a href="#" className="text-gray-800 hover:text-gray-500">
        About
      </a>
    </li>
    <li>
      <a href="#" className="text-gray-800 hover:text-gray-500">
        Services
      </a>
    </li>
    <li>
      <a href="#" className="text-gray-800 hover:text-gray-500">
        Contact
      </a>
    </li>
  </ul>
</div>

    </div>
    </div>
    </header>
  );
};

export default HamburgerMenu;
