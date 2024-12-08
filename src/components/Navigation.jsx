import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Navigation() {
    // The Navbar UI component will render each of the Link elements in the links prop
    const navLocation = useLocation();
    return (
        <Navbar
            links={[
                <Link key={1} to="/" className={navLocation.pathname === '/' ? 'nav-active-page' : ''}>
                    About Me
                </Link>,
                <Link key={2} to="/portfolio" className={navLocation.pathname === '/portfolio' ? 'nav-active-page' : ''}>
                    Portfolio
                </Link>,
                <Link key={3} to="/contact" className={navLocation.pathname === '/contact' ? 'nav-active-page' : ''}>
                    Contact Me
                </Link>,
                <Link key={4} to="/resume" className={navLocation.pathname === '/resume' ? 'nav-active-page' : ''}>
                    Resume
                </Link>,
            ]}
        />
    );
}