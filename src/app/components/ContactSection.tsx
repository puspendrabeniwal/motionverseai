'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="container" style={{ marginTop: '150px', marginBottom: '70px' }}>
      <div className="row align-items-center g-5">
        <div className="col-lg-6 animate-fade-up">
          <span className="text-red fw-bold text-uppercase tracking-wider small">Get In Touch</span>
          <h1 className="main-title mt-2 mb-4">Let's Create Something <span className="text-red">Amazing Together</span></h1>
          <p className="text-secondary mb-5 pb-2 lh-base">
            Have a project in mind? Drop us a message and let's discuss how we can bring your vision to life with stunning motion graphics and cinematic video production.
          </p>

          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="contact-info-card">
                <div className="mb-3 text-red"><i className="fa-solid fa-envelope fs-4"></i></div>
                <h6 className="fw-bold text-white mb-2">Email</h6>
                <a href="mailto:support@motionverseai.com" className="text-secondary text-decoration-none">support@motionverseai.com</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-info-card">
                <div className="mb-3 text-red"><i className="fa-solid fa-phone fs-4"></i></div>
                <h6 className="fw-bold text-white mb-2">Phone</h6>
                <a href="tel:+919024377055" className="text-secondary text-decoration-none">+91 9024377055</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-info-card">
                <div className="mb-3 text-red"><i className="fa-brands fa-whatsapp fs-4"></i></div>
                <h6 className="fw-bold text-white mb-2">WhatsApp</h6>
                <a href="https://wa.me/919024377055" target="_blank" rel="noreferrer" className="text-secondary text-decoration-none">Quick Chat Available</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-info-card">
                <div className="mb-3 text-red"><i className="fa-solid fa-map-location-dot fs-4"></i></div>
                <h6 className="fw-bold text-white mb-2">Location</h6>
                <p className="text-secondary mb-0">India</p>
              </div>
            </div>
          </div>

          <div className="d-flex gap-3">
            <a href="https://wa.me/919024377055" target="_blank" rel="noreferrer" className="btn btn-green px-4 py-3 fw-bold">
              <i className="fa-brands fa-whatsapp me-2"></i>WhatsApp Us
            </a>
            <a href="mailto:support@motionverseai.com" className="btn btn-outline-secondary px-4 py-3 fw-bold">
              <i className="fa-solid fa-envelope me-2"></i>Send Email
            </a>
          </div>
        </div>

        <div className="col-lg-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="mb-4">
              <label htmlFor="name" className="form-label text-white fw-bold">Your Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control form-control-lg bg-dark border-secondary text-white" placeholder="Enter your name" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label text-white fw-bold">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control form-control-lg bg-dark border-secondary text-white" placeholder="your@email.com" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="form-label text-white fw-bold">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-control form-control-lg bg-dark border-secondary text-white" placeholder="+91 9024377055" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="form-label text-white fw-bold">Project Type</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="form-control form-control-lg bg-dark border-secondary text-white" placeholder="e.g., Product Promo, Commercial, Educational" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="form-label text-white fw-bold">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="form-control form-control-lg bg-dark border-secondary text-white" placeholder="Tell us about your project..." required />
            </div>
            <button type="submit" className="btn btn-red btn-lg w-100 fw-bold" disabled={submitted}>
              {submitted ? (
                <><i className="fa-solid fa-check me-2"></i>Message Sent!</>
              ) : (
                <><i className="fa-solid fa-paper-plane me-2"></i>Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
