import React from "react";

const Contact: React.FC = () => {
  return (
    <main className="contact-main">
      <section>
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-subtitle">Your perfect ride is just a message away!</p>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Email:</strong> info@example.com</p>
              <p><strong>Location:</strong> 1234 Elm Street, Springfield, IL</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone Number" />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
