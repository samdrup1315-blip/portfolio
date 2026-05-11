/* ════════════════════════════════════════════
   app.js — Portfolio Backend Server
   Unit 4: Node.js Basics, Console, Modules,
           Events, Express.js, MongoDB Access
   ════════════════════════════════════════════ */

/* ── Node Modules (require = CommonJS module system) ── */
const express      = require('express');
const cors         = require('cors');
const path         = require('path');      // built-in Node module
const EventEmitter = require('events');    // built-in Node Events module
require('dotenv').config();               // loads .env variables

const connectDB       = require('./config/db');
const contactRoutes   = require('./routes/contactRoutes');
const logger          = require('./utils/logger');

/* ── Create Express app ── */
const app  = express();
const PORT = process.env.PORT || 5000;

/* ── Connect to MongoDB ── */
connectDB();

/* ════════════════════════
   Node.js EventEmitter
   Unit 4: Events
   ════════════════════════ */
class ServerEmitter extends EventEmitter {}
const serverEvents = new ServerEmitter();

/* Listen for custom server events */
serverEvents.on('start', (port) => {
  console.log('\x1b[35m[SERVER]\x1b[0m', `Running on http://localhost:${port}`);
});

serverEvents.on('shutdown', () => {
  console.log('\x1b[33m[SERVER]\x1b[0m Shutting down gracefully...');
  process.exit(0);
});

/* ════════════════════════
   Middleware
   ════════════════════════ */

/* CORS — allow requests from React dev server */
app.use(cors({
  origin:      ['http://localhost:3000', 'http://localhost:3001'],
  methods:     ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true,
}));

/* Parse incoming JSON bodies (Unit 4: Express.js) */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ── Request logger middleware (uses our EventEmitter) ── */
app.use((req, res, next) => {
  const start = Date.now();

  /* Intercept res.end to get status code after response */
  res.on('finish', () => {
    logger.emit('request', {
      method: req.method,
      url:    req.originalUrl,
      status: res.statusCode,
      ms:     Date.now() - start,
    });
  });

  next();
});

/* ════════════════════════
   API Routes
   Unit 4: Express.js routes
   ════════════════════════ */
app.use('/api/contact', contactRoutes);

/* Health check route */
app.get('/api/health', (req, res) => {
  res.json({
    status:    'OK',
    timestamp: new Date().toISOString(),
    uptime:    `${Math.floor(process.uptime())}s`,
  });
});

/* ════════════════════════
   Global Error Handler
   ════════════════════════ */
app.use((err, req, res, next) => {
  logger.emit('error', { message: err.message, stack: err.stack });
  res.status(err.status || 500).json({
    success: false,
    error:   process.env.NODE_ENV === 'development' ? err.message : 'Internal server error',
  });
});

/* 404 handler for unknown routes */
app.use((req, res) => {
  res.status(404).json({ success: false, error: `Route ${req.originalUrl} not found` });
});

/* ════════════════════════
   Start Server
   ════════════════════════ */
const server = app.listen(PORT, () => {
  serverEvents.emit('start', PORT); // emit custom event
});

/* Graceful shutdown on CTRL+C */
process.on('SIGINT', () => serverEvents.emit('shutdown'));

module.exports = app;
