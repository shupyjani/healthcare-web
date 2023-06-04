import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>Get in touch</Link>
                    </div>

                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>contact@ajanihealthcare.com</Link>


                    </div>
                </div>

            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src='./images/ahc-logo.png' alt='my logo' width='160px' height='80px' />

                        </Link>
                    </div>
                    <small class='website-rights'>AHC <span>&copy;</span> 2023</small>
                </div>
            </section>
        </div>
    )
}

export default Footer;
