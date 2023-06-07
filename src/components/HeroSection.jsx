import React from 'react';
import Button from './Button';
import '../App.css';
import './HeroSection.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function HeroSection() {
    console.log("Working Fine HeroSection.js")
    useEffect(() => {
        AOS.init();
        console.log("AOS animation running")

    }, [])

    return (
        <div className='hero-container' id='home-section'>
            <img className='hero-container-image' src="/images/img-10.jpeg" alt="img-10" />
            <h1 data-aos="fade-right" data-aos-duration="2000">
                <span className='heading-span1'>AJANI </span>
                <span className='heading-span2'>HEALTH</span>
                <span className='heading-span3'>CARE</span>  - Quality Care You Can Trust</h1>

            <p data-aos="fade-left" data-aos-duration="2000">For your Nursing staff needs</p>
            <div className="hero-btns" data-aos="fade-up" data-aos-duration="2000">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get In Touch

                </Button>

            </div>

        </div>
    )
}

export default HeroSection;
