import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const subject = form.elements.subject.value;
    const comment = form.elements.text.value;

    // Create a mailto link with the form data
    const mailtoLink = `mailto:dimitrisgav04@gmail.com?subject=${subject}&body=${comment}`;

    // Open the default email client with the mailto link
    window.open(mailtoLink);

    // Reset the form fields
    form.reset();
  };

  return (
    <section id="contact">
      <header id="ContactMe">Contact Me</header>
      <form onSubmit={handleSubmit}>
        <input name="subject" type="text" className="feedback-input" placeholder="Subject" />
        <textarea name="text" className="feedback-input" placeholder="Body"></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
      <button className="up-button" onClick={() => window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      })}>
        &#9650;
      </button>
    </section>
  );
};

export default Contact;
