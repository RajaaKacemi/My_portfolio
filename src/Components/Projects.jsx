import { useState } from 'react';
import projectsData from '../Data/projects.json';
import { NavLink } from 'react-router-dom';

function Projects({ isDarkMode }) {
  return (
    <div className={`flex-col lg:flex lg:justify-center px-12 pt-16 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div>
        <button className={`px-4 py-2 border ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>Projects</button>
      </div>
      <div className="sm:flex py-4">
        {projectsData.map((project, index) => (
          <div key={index} className="p-2 sm:w-1/3 flex-grow flex">
            <div className={`border py-4 px-3 hover:border-2 hover:${isDarkMode ? 'border-white' : 'border-black'} transition-all ease-in-out flex-grow flex flex-col justify-between`}>
              <div className="flex justify-between">
                <NavLink to={project.Page_desc}>
                  <p className="text-sm"><strong>{project.title}</strong></p>
                </NavLink>
                <h6 className="text-sm">{project.Type}</h6>
              </div>
              <p className="py-3 text-sm text-start">{project.Description}</p>
              <div className="sm:text-start flex justify-between">
                <div className="text-start">
                  <a href={project.LiveDemo} className={`sm:px-1 sm:py-1 border text-xs ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.Code} className={`sm:px-1 sm:py-1 ml-1 border text-xs ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`} target="_blank" rel="noopener noreferrer">See code</a>
                </div>
                <NavLink to={project.Page_desc}>
                  <p className='text-xs'>More details</p>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
