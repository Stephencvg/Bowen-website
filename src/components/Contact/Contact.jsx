import { useState } from 'react';
import './contact.css';
import msg_icon from '../../assets/images/msg-icon.png';
import mail_icon from '../../assets/images/mail-icon.png';
import phone_icon from '../../assets/images/phone-icon.png';
import location_icon from '../../assets/images/location-icon.png';
import service_icon from '../../assets/images/service-tools.png';
import white_arrow from '../../assets/images/white-arrow.png';

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b6c2ef89-723d-466c-bfc2-3400586f8399");

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
      <div className='contact-col'>
        <h3>
          Send us a message{' '}
          <img
            src={msg_icon}
            alt='message-icon'
          />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
          <ul>
            <li>
              <img
                src={mail_icon}
                alt=''
              />{' '}
              admissions@bowen.edu.ng
            </li>
            <li>
              <img
                src={phone_icon}
                alt=''
              />{' '}
              +234-700-002-6936
            </li>
            <li>
              <img
                src={location_icon}
                alt=''
              />{' '}
              Bowen University, Iwo Osun State, Nigeria
            </li>
            <li>
              <img
                src={service_icon}
                alt=''
              />{' '}
              Mon – Fri | 9:00A.M. – 5:00P.M.
            </li>
          </ul>
        </p>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            required
          />
          <label> Phone Number</label>
          <input
            type='tel'
            name='phone'
            placeholder='Enter your mobile number'
            required
          />
          <label>Write your messages here</label>
          <textarea
            name='message'
            rows='6'
            placeholder='Enter you message'
            required
          ></textarea>
          <button className='btn dark-btn'>
            Submit now{' '}
            <img
              src={white_arrow}
              alt='direction arrow'
            />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
