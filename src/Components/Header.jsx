import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-center px-8 w-full">
      <div className='hidden sm:block'>
        <NavLink to="/Home" className="px-2 font-normal hover:underline" >Home</NavLink>
        <NavLink to="/Profile" className="px-2 font-normal hover:underline " >Profile</NavLink>
        <NavLink to="/Projects" className="px-2  font-normal hover:underline" >Projects</NavLink>
        <NavLink to="/Skills" className="px-2  font-normal hover:underline " >Skills</NavLink>
        <NavLink to="/Contact" className="px-2  font-normal hover:underline " >Contact</NavLink>
        <NavLink to="/Home" className="px-2  font-normal hover:underline " >Blog</NavLink>
      </div>
      <div className='flex w-full justify-between'>
        <div className="flex sm:hidden">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-lg font-normal cursor-pointer"
            onClick={toggleBar}
          />
        </div>
        <div>
          {isOpen && (
            <div className="flex flex-col fixed top-4 left-0 right-0 z-10 py-4 mt-8 border sm:w-full h-full bg-black ">
              <NavLink to="/Home" className="px-2 pt-10 text-4xl font-normal hover:underline text-white" onClick={toggleBar}>Home</NavLink>
              <NavLink to="/Profile" className="px-2 pt-10 text-4xl font-normal hover:underline text-white" onClick={toggleBar}>Profile</NavLink>
              <NavLink to="/Projects" className="px-2 pt-10 text-4xl font-normal hover:underline text-white" onClick={toggleBar}>Projects</NavLink>
              <NavLink to="/Skills" className="px-2 pt-10 text-4xl font-normal hover:underline text-white" onClick={toggleBar}>Skills</NavLink>
              <NavLink to="/Contact" className="px-2 pt-10 text-4xl font-normal hover:underline text-white" onClick={toggleBar}>Contact</NavLink>
              <NavLink to="/Home" className="px-2 pt-10 text-4xl font-normal hover:underline text-white" onClick={toggleBar}>Blog</NavLink>
            </div>
          )}
        </div>
        <div>
          <FontAwesomeIcon
              icon={isDarkMode ? faSun : faMoon}
              className="text-lg font-normal cursor-pointer"
              onClick={toggleDarkMode}
            />
        </div>
      </div>
    </header>
  );
};

export default Header;
