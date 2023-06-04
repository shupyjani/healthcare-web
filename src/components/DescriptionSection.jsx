import React from 'react';
import './DescriptionSection.css';

function DescriptionSection() {
    return (
        <div className='container'>

            <div className='description'>
                {/* <div className="section">
                    <img className='description-section-img' src="images/img-home.jpg" alt="nursing-imge" />
                </div> */}
                <div className="section">
                    <h1 className='description-title'>Who We Are</h1>


                    <p className='description-section'>

                        Ajani Healthcare is a dedicated healthcare organization that was founded with a profound passion for protecting and supporting the National Health Service (NHS). Our mission is to provide exceptional healthcare services, ensuring reliability, affordability, and efficiency without compromising on quality.

                    </p>
                    <br />
                    <p className='description-section'>

                        At Ajani Healthcare, we understand the importance of accessible and dependable healthcare services. Our team of highly skilled and compassionate nurses is at the forefront of delivering a comprehensive range of medical services to individuals and communities alike. We strive to make a positive impact on the lives of our patients by providing them with the highest standard of care.
                    </p>
                    <br />
                    <p className='description-section'>

                        Our commitment to excellence is evident in every aspect of our operations. We continuously invest in the training and development of our nursing staff, ensuring they remain up-to-date with the latest advancements in healthcare practices. This allows us to offer cutting-edge medical services and interventions that are in line with industry standards.


                    </p>
                    <br />
                    <p className='description-section'>

                        We take pride in our ability to deliver reliable and affordable healthcare services. We understand that healthcare should be accessible to all, regardless of financial constraints. With this in mind, we have implemented cost-effective measures without compromising the quality of care we provide. Our aim is to ensure that everyone has access to the healthcare they deserve, without undue financial burden.


                    </p>
                    <br />
                    <p className='description-section'>

                        At Ajani Healthcare, patient satisfaction is paramount. We prioritize building trusting relationships with our patients, fostering an environment of open communication and mutual respect. Our dedicated nurses listen attentively to patients' concerns, ensuring that their unique needs and preferences are met throughout their healthcare journey.


                    </p>
                    <br />
                    <p className='description-section'>

                        Whether it's routine check-ups, preventive care, acute treatments, or ongoing medical management, Ajani Healthcare is here to support you. Our services encompass a wide range of medical disciplines, ensuring that we cater to diverse healthcare needs.


                    </p>
                    <br />
                    <p className='description-section'>

                        By choosing Ajani Healthcare, you are not only opting for high-quality healthcare services but also actively contributing to the protection and preservation of the NHS. We believe in working collaboratively with the NHS, supporting its mission and alleviating the strain on its resources.
                    </p>






                </div>
            </div>

            <div className='our-services'>
                <h1 className='description-title'>Our Services</h1>
                <p className='our-services-section'>Our services are available but not limited to:

                    HOSPITALS, COMMUNITY NURSING, RESIDENTIAL, PRIVATE, AND CAREHOMES.
                </p>
                <br />
                <p className='our-services-section'>
                    Our nurses are experienced and go through rigorous training to make sure they are well equipped to help your loved one or represent your organisation with top notch nursing practice, no matter your needs.
                </p>

            </div>
        </div >
    )
}

export default DescriptionSection;
