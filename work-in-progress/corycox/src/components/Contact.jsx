import React from "react";

// importing smaller components
import ContactItem from "./ContactItem";

function Contact() {
  return (
    <div className="contact-cory" id="contact-me">
      <h2 className="contact-header section-head section-header">
        Contact Cory
      </h2>
      <form name="contact" method="post" action="mailto:cory@corycox.com">
        <ContactItem labelText="Your Name" labelType="text" labelName="name" />
        <ContactItem
          labelText="Your Email"
          labelType="email"
          labelName="email"
        />

        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button className="btn btn-secondary" type="submit">
            Send
          </button>
        </p>
      </form>
    </div>
  );
}

export default Contact;
