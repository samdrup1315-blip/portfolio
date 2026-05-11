/* ─── ErrorBoundary ─── */
/* Unit 3: Error Handling — class component lifecycle */
import React from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  /* Lifecycle: called when a child throws */
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  /* Lifecycle: called after the error is captured */
  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary__inner">
            <span className="error-boundary__code mono">500</span>
            <h2 className="error-boundary__title">Something broke.</h2>
            <p className="error-boundary__msg">{this.state.error?.message}</p>
            <button
              className="error-boundary__btn"
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
