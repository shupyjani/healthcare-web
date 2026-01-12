import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>

            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About us</h2>
                        <Link to='/sign-up'>Get in touch</Link>
                    </div>

                    <div class='footer-link-items'>
                        <h2>Contact us</h2>
                        <Link to='/'>contact@ajanihealthcare.com</Link>
                 <p className="contact-compliance">
                    All staff are recruited, vetted, and managed in line with UK healthcare compliance standards.
                 </p>

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

                    <div class='social-icons'>
                        <a
                            class='social-icon-link facebook'
                            href='https://www.facebook.com/ajanihealthcare/'
                            target='_blank'
                            rel="noopener noreferrer"
                            
                        >
                            <i class='fab fa-facebook-f' />
                        </a>
                        <a
                            class='social-icon-link instagram'
                            href='https://instagram.com/ajanihealthcare?igshid=OGQ5ZDc2ODk2ZA=='
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <i class='fab fa-instagram' />
                        </a>
                        <a
                            class='social-icon-link tiktok'
                            href='https://www.tiktok.com/@ajanihealthcare?_t=8cvOZQGBp8t&_r=1'
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <i class='fab fa-tiktok' />
                        </a>
                        <a
                            class='social-icon-link twitter'
                            href='https://twitter.com/ajanihealthcare?s=21&t=Z3qycfeNybnzMJwMZWm1aQ'
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <i class='fab fa-twitter' />
                        </a>
                        <a
                            class='social-icon-link linkedin'
                            href='https://www.linkedin.com/in/ajani-healthcare-0838b8279'
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <i class='fab fa-linkedin' />
                        </a>
                    </div>






                </div>
            </section>
        </div>
    )
}

export default Footer;
