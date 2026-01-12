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
                            title="Up-to-date healthcare support system"
                            text="Reliable staffing solutions supporting hospitals, care homes, and community services."
                            label='Health'
                            path='/sign-up'
                        />

                        <CardItem
                            src='images/hc-img-2.png'
                            title="Patient-centred care"
                            text="Delivering compassionate, safe, and responsive care through skilled healthcare professionals."
                            label='Health'
                            path='/sign-up'
                        />

                        <CardItem
                            src='images/hc-img-3.jpg'
                            title="High-quality care delivery"
                            text="Delivering safe, responsive, and compassionate care through skilled healthcare professionals who meet high clinical and professional standards."
                            label='Health'
                            path='/sign-up'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='images/hc-img-4.png'
                            title="Highly skilled nursing staff"
                            text="Supplying fully vetted, trained, and experienced nurses and healthcare professionals to meet a wide range of clinical and care requirements."
                            label='Health'
                            path='/sign-up'
                        />

                        <CardItem

                            src='images/hc-img-6.jpg'
                            title="Shared decision-making"
                            text="Working collaboratively with patients, families, and care providers to ensure informed decisions and the best possible care outcomes."
                            label='Health'
                            path='/sign-up'
                        />

                        <CardItem

                            src='images/hc-img-17.jpg'
                            title="Patient education & independence"
                            text="Supporting patients through education and guidance that promotes confidence, autonomy, and long-term wellbeing."
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
