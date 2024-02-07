import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact-form">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/mkndjkvz" method="post">
        <label for="name">name</label>
        <input name="Name" id="name" type="text" /> <br />
        <label for="email">email</label> 
        <input name="Email" id="email" type="email" /> <br />
        <label for="message">message</label>
        <textarea name="Message" id="message" type="text" /> <br />
        <button type="submit">Submit</button>
      </form>
    </section> 
  );
};

export default ContactForm;
