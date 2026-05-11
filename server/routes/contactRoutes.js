/* ─── contactRoutes.js ─── */
/* Unit 4: Express.js RESTful routes */
const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/contactController');

/* Public routes */
router.get( '/',          ctrl.getContactInfo); // GET  /api/contact
router.post('/',          ctrl.sendMessage);    // POST /api/contact

/* Admin routes (no auth in Unit 3/4 scope) */
router.get( '/messages',  ctrl.getMessages);    // GET  /api/contact/messages
router.delete('/messages/:id', ctrl.deleteMessage); // DELETE /api/contact/messages/:id

module.exports = router;
