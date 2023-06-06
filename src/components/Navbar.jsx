import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import Button from './Button';
import './Navbar.css';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (Window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src='./images/ahc-logo.png' alt='my logo' width='160px' height='80px' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>


                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <HashLink
                                smooth
                                to='/#section1'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                About
                            </HashLink>


                        </li>

                        <li className='nav-item'>
                            <HashLink
                                smooth
                                to='/#section2'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Services
                            </HashLink>
                        </li>

                        <li className='nav-item'>
                            <HashLink
                                smooth
                                to='/#section3'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Goals
                            </HashLink>
                        </li>


                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                                Contact us
                            </Link>

                        </li>

                    </ul>

                    
                    {button}

                </div>
            </nav>

        </>
    )
}

export default Navbar
