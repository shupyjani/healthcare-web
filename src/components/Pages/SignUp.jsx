import React, { useState } from 'react'
import '../../App.css';




function SignUp() {


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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data handling logic here
    console.log(formData);
    // Reset the form fields
    setFormData({
      name: '',
      email: '',
      address: '',
      subject: '',
      message: '',
    });
  };


  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <h2 className="form-title">Contact Us</h2>
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
      <button type="submit" className="submit-btn">Submit</button>
      <p className="contact-info">Contact us today and learn more about all of our health care services and options.</p>

    </form>

  )
}

export default SignUp
