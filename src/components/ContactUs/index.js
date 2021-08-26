import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './style.scss';

toast.configure();
export default function ContactUs() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_3lq4jpk', 'template_370614m', e.target, 'user_7KMaIVv6MTRcCThDApKzr')
      .then((result) => {
        if (result.status === 200) {
          toast('Votre message à bien été envoyé !');
          setLastName('');
          setFirstName('');
          setEmail('');
          setText('');
        }
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="contact">
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="contact-form-left">
          <input
            className="contact-form-left__input"
            type="hidden"
            name="contact_number"
            required
          />
          <input
            className="contact-form-left__input"
            type="text"
            placeholder="Nom"
            name="user_name"
            required
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
            className="contact-form-left__input"
            type="text"
            placeholder="Prénom"
            name="user_name"
            required
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            className="contact-form-left__input"
            type="email"
            placeholder="Email"
            name="user_email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            className="contact-form-left__area"
            name="message"
            placeholder="Votre message"
            required
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="contact-form-right">
          <input
            className="contact-form__btn"
            type="submit"
            value="Envoyer !"
          />
        </div>
      </form>
    </div>
  );
}
