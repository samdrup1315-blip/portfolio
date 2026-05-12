/* ─── contactController.js ─── */
/* Unit 4: Express.js, Database CRUD, Modules */
const Message = require('../models/Message');
const logger  = require('../utils/logger');

/* ── GET /api/contact ── Returns static contact info ── */
exports.getContactInfo = (req, res) => {
  res.json({
    email:    'samdrup1315@gmail.com',           
    github:   'https://github.com/samdrup1315-blip',     
    linkedin: 'https://linkedin.com/in/yourhandle',
    location: 'Gangtok, India',
  });
};
/* ── POST /api/contact ── Save a new message to MongoDB ── */
exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    /* Basic validation */
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    /* Create and save document to MongoDB */
    const newMsg = new Message({ name, email, message });
    const saved  = await newMsg.save();

    /* Emit event so logger can track DB writes */
    logger.emit('db', `New message saved — id: ${saved._id}`);

    res.status(201).json({
      success: true,
      message: 'Your message has been received!',
      id:      saved._id,
    });
  } catch (err) {
    logger.emit('error', { message: err.message, stack: err.stack });

    /* Handle Mongoose validation errors */
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ success: false, error: errors.join(', ') });
    }

    res.status(500).json({ success: false, error: 'Server error. Please try again.' });
  }
};

/* ── GET /api/contact/messages ── Retrieve all messages (admin) ── */
exports.getMessages = async (req, res) => {
  try {
    /* READ — fetch all messages, newest first */
    const messages = await Message.find().sort({ createdAt: -1 });
    logger.emit('db', `Fetched ${messages.length} messages`);
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    logger.emit('error', { message: err.message, stack: err.stack });
    res.status(500).json({ success: false, error: 'Server error.' });
  }
};

/* ── DELETE /api/contact/messages/:id ── Delete a message ── */
exports.deleteMessage = async (req, res) => {
  try {
    const deleted = await Message.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Message not found.' });
    }
    logger.emit('db', `Message deleted — id: ${req.params.id}`);
    res.json({ success: true, message: 'Message deleted.' });
  } catch (err) {
    logger.emit('error', { message: err.message, stack: err.stack });
    res.status(500).json({ success: false, error: 'Server error.' });
  }
};
