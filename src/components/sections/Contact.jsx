// src/components/sections/Contact.jsx
import { useRef, useState } from 'react';
import './Sections.css';

const CONTACT_EMAIL = 'gobindabhandari789@gmail.com';
const CONTACT_ENDPOINT = `https://formsubmit.co/${CONTACT_EMAIL}`;

const Contact = () => {
  const submittedRef = useRef(false);
  const timeoutRef = useRef(null);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    submittedRef.current = true;
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'error',
        message: 'The message is taking too long to send. Please try again.'
      });
      submittedRef.current = false;
    }, 15000);
  };

  const handleFormLoad = () => {
    if (!submittedRef.current) return;

    window.clearTimeout(timeoutRef.current);
    submittedRef.current = false;
    setIsSubmitting(false);
    setStatus({
      type: 'success',
      message: 'Message sent successfully. I will get back to you soon.'
    });
    setFormData({ fullname: '', email: '', message: '' });
  };

  return (
    <article className="article active">
      <section>
        <form
          className="contact-form"
          action={CONTACT_ENDPOINT}
          method="POST"
          target="contact-submit-frame"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value={`Portfolio message from ${formData.fullname || 'website visitor'}`} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="about:blank" />

          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="message-wrapper">
            <textarea
              name="message"
              className="form-textarea"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-actions">
            <button className="form-btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {status.message && (
            <p className={`form-status ${status.type}`} role="status">
              {status.message}
            </p>
          )}
        </form>

        <iframe
          className="contact-submit-frame"
          name="contact-submit-frame"
          title="Contact form submission"
          onLoad={handleFormLoad}
        />
      </section>
    </article>
  );
};

export default Contact;
