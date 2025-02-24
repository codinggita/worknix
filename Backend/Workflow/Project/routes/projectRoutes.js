const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Create a project
router.post('/', async (req, res) => {
    try {
        const { name, description, status, timeline } = req.body;

        const newProject = new Project({
            name,
            description,
            status,
            timeline
        });

        await newProject.save();
        res.status(201).json({ message: 'Project created successfully', project: newProject });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create project' });
    }
});

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

// Update a project
router.put('/:id', async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: 'Project updated successfully', project: updatedProject });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update project' });
    }
});

// Delete a project
router.delete('/:id', async (req, res) => {
    try {
        await Project.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete project' });
    }
});

module.exports = router;
