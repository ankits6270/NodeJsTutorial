const getAllTasks = (req,res)=>{
    res.send("Get all tasks");
}

const createTasks = (req,res)=>{
    res.json(req.body);
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