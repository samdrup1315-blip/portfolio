/* ─── 404 Not Found Page ─── */
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="notfound">
    <p className="notfound__num mono">404</p>
    <h1 className="notfound__title">Page not found</h1>
    <p className="notfound__sub">
      Looks like this route doesn't exist. Caught by <code>ErrorBoundary</code>.
    </p>
    <Link to="/" className="notfound__btn">← Back home</Link>
  </div>
);

export default NotFound;
