const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Task name is required'], // Ensure the name is provided
        trim: true, // Remove leading/trailing whitespace
        minlength: [3, 'Task name must be at least 3 characters long'], // Minimum length
        maxlength: [100, 'Task name cannot exceed 100 characters'], // Maximum length
    },
    Completed: {
        type: Boolean,
        required: [true, 'Task completion status is required'], // Ensure Completed field is provided
        default: false, // Default to `false` if not provided
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set creation date
    },
});
const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;