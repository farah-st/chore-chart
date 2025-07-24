const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// GET all members
router.get('/', async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

// GET one member
router.get('/:id', async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

// CREATE a member
router.post('/', async (req, res) => {
  const member = new Member(req.body);
  await member.save();
  res.status(201).json(member);
});

// UPDATE a member
router.put('/:id', async (req, res) => {
  await Member.findByIdAndUpdate(req.params.id, req.body);
  res.status(204).end();
});

// DELETE a member
router.delete('/:id', async (req, res) => {
  await Member.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
