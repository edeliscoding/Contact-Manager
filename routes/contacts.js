const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all user contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('get all contacts');
});

// @route   Post api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route   Put api/contacts/:id
// @desc    Update a contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route   DELETE api/contacts
// @desc    Delete contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete a contact');
});

module.exports = router;
