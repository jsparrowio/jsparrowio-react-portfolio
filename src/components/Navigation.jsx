import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Navigation() {
  const navLocation = useLocation();
  const isActive = (path) => navLocation.pathname === path;

  return (
    <Navbar
      links={[
        <Link key="about" to="/" className={isActive('/') ? 'nav-active-page btn' : 'btn'}>
          About
        </Link>,
        <Link
          key="portfolio"
          to="/portfolio"
          className={isActive('/portfolio') ? 'nav-active-page btn' : 'btn'}
        >
          Portfolio
        </Link>,
        <Link
          key="resume"
          to="/resume"
          className={isActive('/resume') ? 'nav-active-page btn' : 'btn'}
        >
          Resume
        </Link>,
      ]}
    />
  );
}
