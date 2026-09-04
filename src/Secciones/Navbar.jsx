import { useEffect, useState } from 'react';
import LogoPizza from '../assets/Logo_Pizzeria.png';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="links">
                <a href="/">Inicio</a>
            </div>

            <div className="logo">
                <a href="/">
                    <img src={LogoPizza} alt="Logo de la pizzería" />
                </a>
            </div>

            <div className="links">
                <a href="/Menu_Pizzeria.pdf" target="_blank" rel="noopener noreferrer">Menu</a>
            </div>
        </nav>
    );
}

export default Navbar;