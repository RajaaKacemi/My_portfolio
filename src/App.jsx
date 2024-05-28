import './App.css';
import Header from './Components/Header';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Console_project from './Components/Projects/Console_project';
import Random_quotes_project from './Components/Projects/Random_quotes_project';
import Prestigious_project from './Components/Projects/Prestigious_project';
import Dashboard_project from './Components/Projects/Dashboard_project';
import NotFound from './Components/NotFound';
import ScrollToTop from './Components/ScrollToTop';
import PulseLoader from "react-spinners/PulseLoader";
import Template_travel from "./Components/Projects/Template_travel";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true); 

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={`${isDarkMode ? 'bg-black text-white ' : ' bg-white text-black'} h-screen`}>  
      {loading ? (
       <div className='absolute inset-0 flex justify-center items-center bg-black'>
       <PulseLoader
        color="white"
        loading={loading}
        size={18}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        </div>
      ) : (
        <BrowserRouter>
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <ScrollToTop>
            <Routes>
              <Route exact path='/'  element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              <Route exact path='/Home' element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              <Route exact path='/Profile' element={<Profile isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              <Route exact path='/Projects' element={<Projects isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              <Route exact path='/Skills' element={<Skills isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              <Route exact path='/Contact' element={<Contact isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              <Route exact path='/Console_project' element={<Console_project isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              <Route exact path='/Random_quotes_project' element={<Random_quotes_project isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              <Route exact path='/Prestigious_project' element={<Prestigious_project  isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>} />
              <Route exact path='/Dashboard_project' element={<Dashboard_project isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              <Route exact path='/Template_travel' element={<Template_travel isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              <Route exact path='/*' element={<NotFound isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
            </Routes>
          </ScrollToTop>
          <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
