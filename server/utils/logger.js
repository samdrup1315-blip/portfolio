/* ─── logger.js — Node.js Events & Modules ─── */
/* Unit 4: EventEmitter, Node Modules */
const EventEmitter = require('events'); // built-in Node module

class Logger extends EventEmitter {
  constructor() {
    super();
    /* Register event listeners on construction */
    this.on('request',  this._onRequest.bind(this));
    this.on('error',    this._onError.bind(this));
    this.on('db',       this._onDb.bind(this));
  }

  _onRequest({ method, url, status, ms }) {
    const color = status >= 400 ? '\x1b[31m' : '\x1b[32m'; // red / green
    console.log(
      `${color}[REQ]\x1b[0m ${method.padEnd(6)} ${String(status).padEnd(4)} ${url}  (${ms}ms)`
    );
  }

  _onError({ message, stack }) {
    console.error('\x1b[31m[ERR]\x1b[0m', message);
    if (process.env.NODE_ENV === 'development') console.error(stack);
  }

  _onDb(message) {
    console.log('\x1b[36m[DB]\x1b[0m', message);
  }
}

/* Export a single shared instance (singleton pattern) */
const logger = new Logger();
module.exports = logger;
