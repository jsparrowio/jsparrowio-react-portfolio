import { useState } from 'react';
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const showError = (err) => {
  toast.warn(`${err}`); }

  const showSuccess = (msg) => {
  toast.success(`${msg}`);
  }

export default function ContactMePage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [nameBlur, setNameBlur] = useState(false);
  const [emailBlur, setEmailBlur] = useState(false);
  const [messageBlur, setMessageBlur] = useState(false);

  const handleNameBlur = () => {
    name === '' ? setNameBlur(true) : setNameBlur(false)
  };

  const handleEmailBlur = () => {
    email === '' ? setEmailBlur(true) : setEmailBlur(false)
  };

  const handleMessageBlur = () => {
    message === '' ? setMessageBlur(true) : setMessageBlur(false)
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      showError(
        `Your name must be given`
      );
      return;
    }
    if (!email) {
      showError(
        `An email must be given`
      );
      return;
    }
    if (!message) {
      showError(
        `A message must be given`
      );
      return;
    }
    if (!validateEmail(email)) {
      showError('Email is invalid');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
    showSuccess(
      'Your message was sent! Thank you!'
    );
  };

  return (
    <main>
      <h2>Contact Me</h2>
      <section className="page-section" id="contact-me">
        <div id="contact-greeting"><h3>Please fill out the form, and I will get back to you as soon as I can! <br />Thanks for your interest!</h3></div>
        <div className='section-content-div' id="contact-form">
        <ToastContainer 
        position="top-center" />
          <form className="form" onSubmit={handleFormSubmit}>
            <p><label htmlFor="name">Your Name:</label></p>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              onBlur={handleNameBlur}
              type="text"
              placeholder=" Your name"
            />
            {nameBlur && <p>Your name is required!<br /></p>}
            <p><label htmlFor="email">Your Email:</label></p>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              onBlur={handleEmailBlur}
              type="email"
              placeholder=" E-mail"
            />
            {emailBlur && <p>Your email is required!<br /></p>}
            <p><label htmlFor="message">Your Message:</label></p>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              onBlur={handleMessageBlur}
              placeholder=" Your message...."
            /><br />
            {messageBlur && <p>Your message is required!<br /></p>}
            <button type="submit" id="contact-submit">Submit</button>
          </form>
        </div>
        <div id="placeholder"></div>
      </section>
    </main>
  );
}
