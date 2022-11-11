import { Routes, Route } from 'react-router-dom'

import './App.css';

import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/contact' element={<Contact />} />
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
