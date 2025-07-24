const express = require('express');
const router = express.Router();
const Chore = require('../models/Chore');

// GET all chores
router.get('/', async (req, res) => {
  const chores = await Chore.find().populate('assignedTo');
  res.json(chores);
});

// GET one chore
router.get('/:id', async (req, res) => {
  const chore = await Chore.findById(req.params.id).populate('assignedTo');
  res.json(chore);
});

// CREATE a chore
router.post('/', async (req, res) => {
  try {
    const chore = new Chore(req.body);
    await chore.save();
    res.status(201).json(chore);
  } catch (err) {
    console.error('Error saving chore:', err.message);
    res.status(500).json({ error: 'Failed to create chore', details: err.message });
  }
});


// UPDATE a chore
router.put('/:id', async (req, res) => {
  await Chore.findByIdAndUpdate(req.params.id, req.body);
  res.status(204).end();
});

// DELETE a chore
router.delete('/:id', async (req, res) => {
  await Chore.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
