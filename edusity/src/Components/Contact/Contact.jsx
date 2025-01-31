import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import msg_icon from '../../assets/msg-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "77c9f661-a922-4520-96cf-2da71b830103");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className='contact'>
      <div className="contact-column">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below your feedback questions and suggestions are important to us as we strive to provide exceptional service to our university community</p>
        <ul>
            <li><img src={mail_icon} alt="" />edusityinstitute@gmail.com</li>
            <li><img src={phone_icon} alt="" />+1261-456789</li>
            <li><img src={location_icon} alt="" />77, Ambedkar Bhavan, chowk road, Bhopal,Madhya Pradesh - 365478</li>
        </ul>
      </div>
      <div className="contact-column">
        <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label htmlFor="">Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" id=""  rows="6" placeholder='Enter your message here' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span> {result}</span>
      </div>
    </div>
  )
}

export default Contact
