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
            <h1>Our Goal</h1>
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
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards
