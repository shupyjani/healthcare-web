import React, { useState } from 'react'
import { useRef } from 'react';
import '../../App.css';
import emailjs from '@emailjs/browser';



function SignUp() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

  if (e.target.website && e.target.website.value) {
    return;
  }

  emailjs.sendForm('service_o99hzun', 'template_c32bqwm', form.current, 'csIr3QJ1ouLKn0w08')
    .then((result) => {
      alert("Your request has been sent. We will respond as soon as possible.");

      setFormData({
        name: '',
        email: '',
        address: '',
        subject: '',
        message: '',
      });
    }, (error) => {
      alert("Sorry, your message could not be sent. Please try again or email us directly.");
      console.log(error.text);
    });
};



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert("Your Information successfully submitted")
  //   // Perform form submission or data handling logic here
  //   console.log(formData);
  //   // Reset the form fields
  //   setFormData({
  //     name: '',
  //     email: '',
  //     address: '',
  //     subject: '',
  //     message: '',
  //   });
  // };


 return (
 <form ref={form} onSubmit={sendEmail} className="contact-form">
  <div style={{ display: 'none' }} aria-hidden="true">
    <label htmlFor="website">Website</label>
    <input
      type="text"
      id="website"
      name="website"
      tabIndex={-1}
      autoComplete="off"
    />
  </div>

  <div className="form-group">
    <h2 className="form-title">Contact us</h2>

    <p className="contact-reassurance">
      All enquiries are handled confidentially by our management team. We will respond as soon as possible.
    </p>

    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
    <div className="form-group">
  <label htmlFor="address">Location / postcode area optional:</label>
  <input
    type="text"
    id="address"
    name="address"
    value={formData.address}
    onChange={handleChange}
    placeholder="Optional - town/city or first part of postcode"
    maxLength={80}
  />
</div>
      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">

        Submit</button>
      <p className="contact-info">Contact us today and learn more about all of our health care services and options.</p>

    </form>

  )
}

export default SignUp
