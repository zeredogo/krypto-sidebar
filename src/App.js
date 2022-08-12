import React from 'react';
import './App.css';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';
function App() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
      <p className="footer"><small>Krypto Zone &copy; 2022</small></p>
    </>
  )
}

export default App
