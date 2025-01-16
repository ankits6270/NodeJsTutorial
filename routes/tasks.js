const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    deleteTasks,
    updateTasks,
    getTasks,
    createTasks,
} = require('../controller/tasks');

// Route for getting all tasks and creating a new task
router.route('/')
    .get(getAllTasks)  // GET /tasks - Get all tasks
    .post(createTasks); // POST /tasks - Create a new task

// Routes for operations on a specific task
router.route('/:id')
    .get(getTasks)       // GET /tasks/:id - Get a single task
    .patch(updateTasks)  // PATCH /tasks/:id - Update a task
    .delete(deleteTasks); // DELETE /tasks/:id - Delete a task

module.exports = router;
