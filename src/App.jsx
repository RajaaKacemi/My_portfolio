import './App.css'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Console_project from './Components/Projects/Console_project';
import Random_quotes_project from './Components/Projects/Random_quotes_project';
import Prestigious_project from './Components/Projects/Prestigious_project';

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path='/' element={<Home />} />
        <Route exact path='/Home' element={<Home />} />
        <Route exact path='/Profile' element={<Profile />} />
        <Route exact path='/Projects' element={<Projects />} />
        <Route exact path='/Skills' element={<Skills />} />
        <Route exact path='/Contact' element={<Contact />} />
        <Route exact path='/Console_project' element={<Console_project />} />
        <Route exact path='/Random_quotes_project' element={<Random_quotes_project />} />
        <Route exact path='/Prestigious_project' element={<Prestigious_project />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
