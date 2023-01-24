import { Routes, Route } from 'react-router-dom'

import './App.css';

import About from "./pages/About";
import CaseProblem from "./pages/CaseProblem";
import CodeOfConduct from "./pages/CodeOfConduct";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import SignUp from "./pages/SignUp";
import Workshops from "./pages/Workshops";
import Winners from "./pages/Winners";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/case' element={<CaseProblem />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/conduct' element={<CodeOfConduct />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/schedule' element={<Schedule />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/winners' element={<Winners />} />
      <Route path='/workshops' element={<Workshops />} />

      <Route
        path='*'
        element={
          <main style={{ padding: '1rem' }}>
            <p>Page not found</p>
          </main>
        }
      />
    </Routes>
  </>
  );
}

export default App;
