import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const pageTitle = (pathname) => {
  if (pathname === '/') return 'About';
  if (pathname.startsWith('/portfolio')) return 'Portfolio';
  if (pathname.startsWith('/contact')) return 'Contact';
  if (pathname.startsWith('/resume')) return 'Resume';
  return 'Portfolio';
};

function App() {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitle(location.pathname);
    document.title = `${title} | Josh Garrett`;
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
