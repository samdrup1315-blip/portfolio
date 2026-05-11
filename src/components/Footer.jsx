/* ─── Footer ─── */
import React from 'react';
import { PROFILE } from '../data';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <p className="footer__copy mono">
      <span className="accent">©</span> {new Date().getFullYear()} Yeshey Samdrup — Built with React, Redux &amp; Node.js
      </p>
      <p className="footer__stack mono">
        React · Redux Saga · Immutable.js · Node · Express · MongoDB
      </p>
    </div>
  </footer>
);

export default Footer;
