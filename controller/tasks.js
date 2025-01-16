const Task = require('../models/Task')


const getAllTasks = (req,res)=>{
    res.send("Get all tasks");
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

const getTasks = (req,res)=>{
    res.json({id:req.params.id});
}

const updateTasks = (req,res)=>{
    res.send("Update tasks");
}

const deleteTasks = (req,res)=>{
    res.send("Delete tasks");
}

module.exports = {getAllTasks,deleteTasks,updateTasks,getTasks,createTasks}