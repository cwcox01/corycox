import React from "react";

function Contact() {
  return (
    <div className="contact-cory" id="contact-me">
      <h2 className="contact-header section-head">Contact Cory</h2>
      <form name="contact" method="POST" data-netlify="true" action="/success">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>

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
