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
  const chore = new Chore(req.body);
  await chore.save();
  res.status(201).json(chore);
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
