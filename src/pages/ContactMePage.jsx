import { useState, useEffect } from 'react';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function ContactMePage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      setErrorMessage(
        `Your name must be given`
      );
      return;
    }
    if (!email) {
      setErrorMessage(
        `An email must be given`
      );
      return;
    }
    if (!message) {
      setErrorMessage(
        `A message must be given`
      );
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    alert(`Thanks for contacting me! I will respond as soon as I can!`);

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('You message was submitted! Thank you!')
  };

  return (
    <main>
      <h2>Contact Me</h2>
      <section className="page-section" id="contact-me">
        <div id="contact-greeting"><h3>Please fill out the form, and I will get back to you as soon as I can! <br />Thanks for your interest!</h3></div>
        <div className='section-content-div' id="contact-form">
          <form className="form" onSubmit={handleFormSubmit}>
            <p><label htmlFor="name">Your Name:</label></p>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder=" Your name"
            />
            <p><label htmlFor="email">Your Email:</label></p>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder=" E-mail"
            />
            <p><label htmlFor="message">Your Message:</label></p>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              placeholder=" Your message...."
            /><br />
            <button type="submit" id="contact-submit">Submit</button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <div id="placeholder"></div>
      </section>
    </main>
  );
}
