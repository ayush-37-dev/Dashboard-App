const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const auth = require('../middleware/auth');

// Create task
router.post('/', auth, async (req,res)=>{
    const { title, description } = req.body;
    const task = new Task({ user: req.user.id, title, description });
    await task.save();
    res.json(task);
});

// Get tasks
router.get('/', auth, async (req,res)=>{
    const { search, completed } = req.query;
    let query = { user: req.user.id };
    if(search) query.title = { $regex: search, $options: 'i' };
    if(completed) query.completed = completed === 'true';
    const tasks = await Task.find(query);
    res.json(tasks);
});

// Update task
router.put('/:id', auth, async (req,res)=>{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
});

// Delete task
router.delete('/:id', auth, async (req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Task deleted' });
});

module.exports = router;
