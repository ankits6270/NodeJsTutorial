const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});

const createTasks = asyncWrapper(async (req, res) => {
  const { name, Completed } = req.body;
  const newTask = new Task({
    name,
    Completed,
  });
  const savedTask = await newTask.save();
  res.status(201).json({
    message: "Task Created Succeefully",
    task: savedTask,
  });
});

const getTasks = asyncWrapper(async (req, res) => {
  debugger;
  const { id: taskID } = req.params; // Corrected destructuring
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    const error = new Error("Task not found");
    error.status = 404;
    
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json({
    message: "Task found",
    task,
  });
});

const updateTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json({
    message: "Task updated",
    task,
  });
});

const deleteTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(200).json({
    message: "Task deleted",
    task,
  });
});

module.exports = {
  getAllTasks,
  deleteTasks,
  updateTasks,
  getTasks,
  createTasks,
};
