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
            <h1 className='goals-title' id='section3'>Our Goals</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='images/hc-img-1.jpg'
                            text="Up-to-date healthcare support system"
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
                            text="Effective patient centred care"
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
                            text="Promote shared decision making"
                            label='Health'
                            path='/sign-up'
                        />

                        <CardItem

                            src='images/hc-img-17.jpg'
                            text="Promote patient education and autonomy"
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
