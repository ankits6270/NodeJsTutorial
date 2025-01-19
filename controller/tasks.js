const Task = require('../models/Task')


const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find();
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

const createTasks = async(req,res)=>{
    try {
        const {name,Completed} = req.body;
        const newTask = new Task({
            name,Completed
        });
        const savedTask = await newTask.save();
        res.status(201).json({
            message:'Task Created Succeefully',
            task:savedTask
        })
    } catch (error) {
        res.status(500).json({
            message:'Error creating task',
            error:error.message 
        })
    }
}

const getTasks = async (req, res) => {
    try {
        debugger;
        const { id: taskID } = req.params; // Corrected destructuring
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({
            message: 'Task found',
            task
        });
    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({ message: 'Invalid Task ID' });
        }
        res.status(500).json({ message: error.message });
    }
};

const updateTasks = async (req,res)=>{
    try {
        debugger;
        const {id:taskID} = req.params;
        const {name,Completed} = req.body;
        const updatedTask = {name,Completed};
        const task = await Task.findOneAndUpdate({_id:taskID},updatedTask,{new:true,runValidators:true});
        if(!task){
            return res.status(404).json({message:'Task not found'})
        }
        res.status(200).json({
            message:'Task updated',
            task
        })
    } 
    catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteTasks = async(req,res)=>{
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({message:'Task not found'})
        }
        res.status(200).json({
            message:'Task deleted',
            task
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {getAllTasks,deleteTasks,updateTasks,getTasks,createTasks}