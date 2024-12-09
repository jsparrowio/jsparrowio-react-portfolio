// import all dependencies including Outlet, which will render the linked page; useLocation, which determines which page is the user activel viewing;
// useState/useEffect, wich affects the useState variables and what is reloaded on each change
// also import CSS code and the main header/footer for entire site
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

// function to render entire React single page application
function App() {
  const location = useLocation();
  // establishes about me as home page
  const [currentPage, setPage] = useState("About Me")
  useEffect(() => {
    if (location.pathname === '/') {
      setPage("About Me");
    } else if (location.pathname === '/portfolio') {
      setPage("Portfolio");
    } else if (location.pathname === '/contact') {
      setPage("Contact Me");
    } else if (location.pathname === '/resume') {
      setPage("Resume");
    }
    document.title = `${currentPage} | jsparrowio - Portfolio`;
  });
  // returns the entire single page site, outlet based on what the user chooses
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;