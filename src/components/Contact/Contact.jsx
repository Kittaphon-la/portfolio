// src/components/Contact/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSuccess(true);
    // TODO: handle submission (send email or API)
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange}></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Send Message</button>
        {success && <p className="success">Message sent successfully!</p>}
      </form>

      <div className="contact-links">
        <a href="https://github.com/Kittaphon-la" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/kittaphon-la/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>

      <div className="contact-info">
        <p>Email: example@example.com</p>
        <p>Phone: +66 123 456 789</p>
      </div>
    </section>
  );
}
