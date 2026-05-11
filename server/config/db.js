/* ─── db.js — MongoDB Connection ─── */
/* Unit 4: Database Access, Node Modules */
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    /* Mongoose 8+ does not need useNewUrlParser or useUnifiedTopology */
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`[MongoDB] Connected → ${conn.connection.host}`);

    mongoose.connection.on('error', (err) => {
      console.error('[MongoDB] Connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('[MongoDB] Disconnected from database');
    });

  } catch (err) {
    console.error('[MongoDB] Failed to connect:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
