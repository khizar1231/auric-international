import React from 'react';
import './Contact.css';

export default function Contact() {

  const openInstagram = (e) => {
    e.preventDefault();

    // Optional: prefill some text if needed
    const instagramURL = 'https://www.instagram.com/auric.international/';
    window.open(instagramURL, '_blank');
  };

  return (
    <section className="contact-container" id="contact">
      <div className="contact-content">

        <h2>Contact Auric International</h2>
        <p>
          We work with brands worldwide to deliver premium-quality apparel
          with precision, transparency, and reliability.
        </p>

        <div className="contact-grid">

          <div>
            <h3>Business Details</h3>
            <p>Email: auricinternational1111@gmail.com</p>
            <p>WhatsApp: +92 3709085311</p>
            <p>Instagram: <a href="https://www.instagram.com/auric.international/" target="_blank" rel="noreferrer">@auric.international</a></p>
            <p>Location: Sialkot Pakistan</p>
          </div>

          <form className="contact-form" onSubmit={openInstagram}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send via Instagram</button>
          </form>

        </div>
      </div>
    </section>
  );
}
