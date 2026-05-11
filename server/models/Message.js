/* ─── Message.js — Mongoose Model ─── */
/* Unit 4: Database Access — MongoDB schema definition */
const mongoose = require('mongoose');

/* Define the shape of a document in the 'messages' collection */
const MessageSchema = new mongoose.Schema(
  {
    name: {
      type:     String,
      required: [true, 'Name is required'],
      trim:     true,
      maxlength: [80, 'Name cannot exceed 80 characters'],
    },
    email: {
      type:     String,
      required: [true, 'Email is required'],
      trim:     true,
      lowercase: true,
      match:    [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    message: {
      type:     String,
      required: [true, 'Message is required'],
      trim:     true,
      maxlength: [2000, 'Message cannot exceed 2000 characters'],
    },
    read: {
      type:    Boolean,
      default: false,
    },
  },
  {
    /* Automatically adds createdAt and updatedAt fields */
    timestamps: true,
  }
);

module.exports = mongoose.model('Message', MessageSchema);
