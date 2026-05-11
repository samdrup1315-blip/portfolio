/* ─── App.jsx ─── */
/* Unit 3: React Router, Redux Provider, ErrorBoundary */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';

/* ── Single-page layout (all sections on one scrollable page) ── */
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </>
);

const App = () => (
  /* Redux: makes global store available to all components */
  <Provider store={store}>
    <BrowserRouter>
      {/* ErrorBoundary: catches any render error in the tree */}
      <ErrorBoundary>
        <div className="noise" aria-hidden="true" />
        <Navbar />
        <main>
          {/* React Router: multi-route navigation */}
          <Routes>
            <Route path="/"  element={<HomePage />} />
            <Route path="*"  element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>
);

export default App;
