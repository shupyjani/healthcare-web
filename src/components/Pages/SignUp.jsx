import React, { useState } from 'react'
import { useRef } from 'react';
import '../../App.css';
import emailjs from '@emailjs/browser';



function SignUp() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o99hzun', 'template_c32bqwm', form.current, 'csIr3QJ1ouLKn0w08')
      .then((result) => {
        alert("Your request has been sent")
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    // e.target.reset()
    setFormData({
      name: '',
      email: '',
      address: '',
      subject: '',
      message: '',
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
     <>
      <p className="contact-reassurance">
        All enquiries are handled confidentially by our management team. We aim to respond within one working day.
      </p>
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <div className="form-group">
        <h2 className="form-title">Contact us</h2>
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
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
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
