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
            </div>

            <div className='img-container'>
                <h1 className='services-title' id='section2'>Our Services</h1>
                <div class="image-gallery">
                    <div class="image-container">
                        <img src="images/hc-img-18.jpg" alt="" />
                        <div class="image-text">
                            <h3>Hospitals</h3>
                            <p>Provide high-quality care to patients, managing physical needs, preventing illness, and treating health conditions.</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="images/hc-img-16.jpg" alt="" />
                        <div class="image-text">
                            <h3>Community Nursing</h3>
                            <p>Visiting patient's in their own homes or in residential care homes and to provide a range of medical care to support periods of illness and incapacity.</p>
                        </div>
                    </div>
                    <div class="image-container">
                        <img src="images/hc-img-19.jpg" alt="" />
                        <div class="image-text">
                            <h3>Care homes</h3>
                            <p> Mainataining a person and relationship-centred approach to care as well as fulfilling leadership/management responsibilities to staff at all levels within the organisation.</p>
                        </div>
                    </div>
                </div>
            </div>



        </div >
    )
}

export default DescriptionSection;
