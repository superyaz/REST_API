import Task from '../models/Task'

export const findAllTask = async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
}


export const createTask = async (req, res) => {
    const newTask = new Task({
        title: req.body.title,
        description: req.body.description,
        done: req.body.done ? req.body.done : false
    })
    const taskSave = await newTask.save()
    res.json(taskSave)
}

export const findOnetask = async (req, res) => {
    const task = await Task.findById(req.params.id)
    res.json(task);
}

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)
    res.json({
        message: 'Task were deleted successfully',
    });
};


export const findAllDoneTask = async (req, res) => {
    const tasks = await Task.find({ done: true })
    res.json(tasks)
}

export const updateTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        message: 'Task was update Successfully'
    })
}