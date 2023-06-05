import React from 'react'
import CardItem from './CardItem'
import { useEffect } from 'react';
import './Cards.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Cards() {
    console.log("Cards component working fine")
    useEffect(() => {
        AOS.init();
        console.log("AOS animation running")

    }, [])

    return (
        <div className='cards'>
            {/* <h1 className='services-title' id='section2'>Our Services</h1>
            <div class="image-gallery">
                <div class="image-container">
                    <img src="images/hc-img-8.jpg" alt="" />
                    <div class="image-text">
                        <h3>Home Care Service</h3>
                        <p>Providing compassionate and professional care in the comfort of your own home, ensuring your well-being and peace of mind.</p>
                    </div>
                </div>
                <div class="image-container">
                    <img src="images/hc-img-9.jpg" alt="" />
                    <div class="image-text">
                        <h3>Senior Care Service</h3>
                        <p>Dedicated support for elderly individuals, promoting independence, dignity, and a safe environment to enhance their quality of life.</p>
                    </div>
                </div>
                <div class="image-container">
                    <img src="images/hc-img-10.jpg" alt="" />
                    <div class="image-text">
                        <h3>Intensive Care Service</h3>
                        <p> Exceptional and specialized medical attention, offering comprehensive treatment and monitoring for critical patients, ensuring optimal care and recovery.</p>
                    </div>
                </div>
            </div> */}
            




            {/* <h1>Our Services</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='images/hc-img-8.jpg'
                            text="Home Care Service"
                            label='Health'
                            path='/sign-up'
                        />

                        <CardItem

                            src='images/hc-img-9.jpg'
                            text="Senior Care Service"
                            label='Health'
                            path='/sign-up'
                        />

                        <CardItem
                            src='images/hc-img-10.jpg'
                            text="Intensive Care Service"
                            label='Health'
                            path='/sign-up'
                        />

                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/hc-img-11.jpg'
                            text="Highly skilled nursing staff"
                            label='Health'
                            path='/sign-up'
                        />

                        <CardItem

                            src='images/hc-img-12.jpg'
                            text="Health Consultation"
                            label='Health'
                            path='/sign-up'
                        />

                        <CardItem

                            src='images/hc-img-13.jpg'
                            text="Home Medical Check"
                            label='Health'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div> */}





            <h1 className='goals-title' id='section3'>Our Goals</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='images/hc-img-1.jpg'
                            text="Health care support system"
                            label='Health'
                            path='/sign-up'
                        />

                        <CardItem
                            src='images/hc-img-2.png'
                            text="Provide Patient satisfactory health support"
                            label='Health'
                            path='/sign-up'
                        />

                        <CardItem
                            src='images/hc-img-3.jpg'
                            text="Everything that patient needs"
                            label='Health'
                            path='/sign-up'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/hc-img-4.png'
                            text="Highly skilled nursing staff"
                            label='Health'
                            path='/sign-up'
                        />

                        <CardItem

                            src='images/hc-img-6.jpg'
                            text="Provide quick support system"
                            label='Health'
                            path='/sign-up'
                        />

                        <CardItem

                            src='images/hc-img-6.jpg'
                            text="Provide quick support system"
                            label='Health'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards
