/* ─── Contact Section ─── */
/* Unit 3: Redux state, Portal, Lifecycle, Props */
/* Unit 4 link: form dispatches to Saga → Express POST /api/contact */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageRequest, fetchContactRequest } from '../store/actions';
import './Contact.css';

/* ── Portal: Success modal rendered outside #root ── */
/* Unit 3: Portals — renderering outside the DOM tree */
const SuccessModal = ({ onClose }) =>
  ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-icon">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="#c8f04d" strokeWidth="1.5"/>
            <path d="M10 16l4 4 8-8" stroke="#c8f04d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="modal-title">Message sent!</h3>
        <p className="modal-body mono">I'll get back to you soon.</p>
        <button className="modal-btn" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body   /* Portal target: outside #root */
  );

const EMPTY_FORM = { name: '', email: '', message: '' };

const Contact = () => {
  const dispatch = useDispatch();

  /* Read Immutable.js state — must use .get() */
  const sending     = useSelector(s => s.get('sending'));
  const messageSent = useSelector(s => s.get('messageSent'));
  const error       = useSelector(s => s.get('error'));
  const contact     = useSelector(s => s.get('contact'));

  const [form, setForm] = useState(EMPTY_FORM);
  const [showModal, setShowModal] = useState(false);

  /* Lifecycle: fetch contact info when component mounts */
  useEffect(() => {
    dispatch(fetchContactRequest());
  }, [dispatch]);

  /* Lifecycle: show modal when Redux says message was sent */
  useEffect(() => {
    if (messageSent) {
      setShowModal(true);
      setForm(EMPTY_FORM);
    }
  }, [messageSent]);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    /* Dispatch → Saga picks up SEND_MESSAGE_REQUEST → calls Express POST */
    dispatch(sendMessageRequest(form));
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-num mono accent">04.</span>
          <h2 className="section-title">Get in touch</h2>
          <div className="section-line" />
        </div>

        <div className="contact__grid">
          {/* Left: copy + links */}
          <div className="contact__info">
            <p className="contact__lead">
              I'm currently open to internship opportunities and
              freelance projects. Have a project in mind or just want
              to say hi? My inbox is open.
            </p>

            <div className="contact__links">
              <a
                href={`mailto:${contact?.get?.('email') || 'yourname@email.com'}`}
                className="contact__link-item"
              >
                <span className="contact__link-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="mono">Email me</span>
              </a>

              <a
                href={contact?.get?.('github') || '#'}
                target="_blank"
                rel="noreferrer"
                className="contact__link-item"
              >
                <span className="contact__link-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                <span className="mono">GitHub</span>
              </a>

              <a
                href={contact?.get?.('linkedin') || '#'}
                target="_blank"
                rel="noreferrer"
                className="contact__link-item"
              >
                <span className="contact__link-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                <span className="mono">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right: contact form */}
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label mono" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-input"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label mono" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label mono" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-input form-textarea"
                placeholder="What's on your mind?"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {error && (
              <p className="form-error mono">{error}</p>
            )}

            <button
              type="submit"
              className="form-submit"
              disabled={sending}
            >
              {sending ? (
                <span className="mono">Sending...</span>
              ) : (
                <>
                  Send message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Portal: success modal */}
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Contact;