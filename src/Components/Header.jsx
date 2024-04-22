import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`flex justify-center py-8 px-12 w-full  ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className='hidden sm:block'>
        <NavLink to="/Home" className={`px-2 font-normal hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`} >Home</NavLink>
        <NavLink to="/Projects" className={`px-2 font-normal hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`} >Projects</NavLink>
        <NavLink to="/Profile" className={`px-2 font-normal hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`} >About</NavLink>
        <NavLink to="/Skills" className={`px-2 font-normal hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`} >Profile</NavLink>
        <NavLink to="/Contact" className={`px-2 font-normal hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`} >Contact</NavLink>
        <NavLink to="/Home" className={`px-2 font-normal hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`} >Blog</NavLink>
      </div>
      <div className='flex w-full justify-between'>
        <div className="flex sm:hidden">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className={`text-lg font-normal cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}
            onClick={toggleBar}
          />
        </div>
        <div>
          {isOpen && (
            <div className={`flex flex-col fixed top-4 left-0 right-0 z-10 py-4 mt-12 border sm:w-full h-full ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
              <NavLink to="/Home" className={`px-2 pt-10 text-4xl font-normal hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`} onClick={toggleBar}>Home</NavLink>
              <NavLink to="/Profile" className={`px-2 pt-10 text-4xl font-normal hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`} onClick={toggleBar}>About</NavLink>
              <NavLink to="/Skills" className={`px-2 pt-10 text-4xl font-normal hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`} onClick={toggleBar}>Profile</NavLink>
              <NavLink to="/Projects" className={`px-2 pt-10 text-4xl font-normal hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`} onClick={toggleBar}>Projects</NavLink>
              <NavLink to="/Contact" className={`px-2 pt-10 text-4xl font-normal hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`} onClick={toggleBar}>Contact</NavLink>
              <NavLink to="/Home" className={`px-2 pt-10 text-4xl font-normal hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`} onClick={toggleBar}>Blog</NavLink>
            </div>
          )}
        </div>
        <div>
          <FontAwesomeIcon
              icon={isDarkMode ? faSun : faMoon}
              className={`text-lg font-normal cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}
              onClick={toggleDarkMode}
            />
        </div>
      </div>
    </header>
  );
};

export default Header;
