import Task from '../models/Task'

export const findAllTask = async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
}


export const createTask = async (req, res) => {
    const newTask = new Task({ title: req.body.title, description: req.body.description })
    const taskSave = await newTask.save()
    res.json(taskSave)
}

export const findOnetask = async (req, res) => {
    const task = await Task.findById(req.params.id)
    res.json(task);
}
