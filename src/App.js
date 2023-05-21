import './styles.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// NavBar component// NavBar component
import HomePage from './components/HomePage';
import AMS from './components/AMS';
import UGI from './components/UserGuide';
import Cont from './components/Contact';
import RnF from './components/Review';

import logo from './1.png';

// Home component
// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Home Page!</h1>
//     </div>
//   );
// };

// ExtraPage component

const NavBar = () => {
  return (
    <nav className = 'nb' style={{display: 'flex', justifyContent: 'flex-start', left: '0'}}>   
      <img src= {logo} alt="Img Not Exists" className='lg'/>
      <div style={{ padding: '8px' }}>
        <button className = 'btn' style={{marginRight: '10px', borderRadius: '1%', color: 'brown'}}>
          <Link to="/" style = {{color: 'brown'}}>Home</Link>
        </button>
        <button className = 'btn' style={{ marginRight: '10px', borderRadius: '1%', color: 'brown'}}>
          <Link to="/main" style = {{color: 'brown'}}>Manage Albums List</Link>
        </button>
        <button className = 'btn' style={{ marginRight: '10px', borderRadius: '1%', color: 'brown' }}>
          <Link to="/ugi" style = {{color: 'brown'}}>User Guide and Instructions</Link>
        </button>
        <button className = 'btn' style={{ marginRight: '10px', borderRadius: '1%', color: 'brown' }}>
          <Link to="/cnt" style = {{color: 'brown'}}>Contact</Link>
        </button>
        <button className = 'btn' style={{ marginRight: '10px', borderRadius: '1%', color: 'brown' }}>
          <Link to="/rev" style = {{color: 'brown'}}>Review and Feedback</Link>
        </button>
      </div>
    </nav>
  );
};

// App component
const App = () => {
  return (
    <Router>
      <div style={{ minHeight: '940vh', position: 'relative' }}>
      <header style={{top: '0', left: '0', position : 'fixed', width: '100%', background: 'grey', color: 'yellow', padding: '5px', textAlign: 'center', fontWeight: 'bold', zIndex: '9999'}}>Albums List Manager Web App </header>
      <div>
        <br />
        <NavBar />
        <br />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<AMS />} />
          <Route path="/ugi" element={<UGI />} />
          <Route path="/cnt" element={<Cont />} />
          <Route path="/rev" element={<RnF />} />
        </Routes>
      </div>
      <footer style ={{ position: 'fixed', bottom: '0', left: '0', width: '100%', background: 'rgba(0, 0, 0, 0.5)', color: 'yellow', padding: '3px', textAlign: 'center', zIndex: '9999' }}> Thank you Viewers for Visiting this Web Application Site.</footer>
      </div>
    </Router>
  );
};

export default App;

