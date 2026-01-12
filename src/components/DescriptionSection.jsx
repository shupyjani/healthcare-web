import React from 'react';
import './DescriptionSection.css';

function DescriptionSection() {
    return (
        <div className='container'>

            <div className='description' id='section1'>
                <div className="section" >
                    <h1 className='description-title'>Who We Are</h1>


                    <p className='description-section'>

                        Ajani Healthcare is a UK-based healthcare staffing provider delivering reliable, high-quality nursing and healthcare support services.
                        
                    </p>
                    <br />
                    <p className='description-section'>

                        We work closely with hospitals, care homes, and community services to supply skilled, compassionate, and fully vetted staff when and where they are needed most.
                        
                    </p>
                    <br />
                    <p className='description-section'>

                        Our mission is to support safe, effective care delivery by providing dependable staffing solutions that meet both clinical and organisational needs.

                    </p>
                    <br />
                    <p className='description-section'>

                        With a strong commitment to professional standards and continuous staff development, Ajani Healthcare is proud to support the NHS and wider care sector in delivering excellent patient care.

                    </p>

                </div>
                <div className="trust-section">
                    <p className="trust-text">
                        We operate with robust governance, strict compliance standards, and a rigorous recruitment process to ensure every nurse and healthcare professional we supply is fully vetted, trained, and reliable. Our clients trust us to deliver safe, consistent staffing solutions that meet regulatory requirements and support high-quality patient outcomes.
                   </p>
            </div>
            </div>

            <div className='img-container'>
                <h1 className='services-title' id='section2'>Our Services</h1>
                <div class="image-gallery">
                    <div class="image-container">
                        <img src="images/hc-img-18.jpg" alt="" />
                        <div class="image-text">
                            <h3>Hospitals</h3>
                            <p>We supply experienced and reliable nurses and healthcare support workers to hospitals, helping maintain safe staffing levels and high standards of patient care across a range of clinical settings.</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="images/hc-img-16.jpg" alt="" />
                        <div class="image-text">
                            <h3>Community Nursing</h3>
                            <p>Our community nursing staff support patients in their own homes and residential settings, delivering compassionate, person-centred care while promoting independence and wellbeing.</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="images/hc-img-19.jpg" alt="" />
                        <div class="image-text">
                            <h3>Care homes</h3>
                            <p> We provide skilled nursing and care staff to residential and nursing homes, supporting day-to-day care delivery, leadership needs, and continuity of care for residents.</p>
                        </div>
                    </div>
                </div>
            </div>



        </div >
    )
}

export default DescriptionSection;
