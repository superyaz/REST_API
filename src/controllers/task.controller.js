import Task from '../models/Task'

export const findAllTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks)
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong retrieving the task',
        });
    }

}

export const createTask = async (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({ message: 'Content cannot be empty' });
    }
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false
        })
        const taskSave = await newTask.save();
        res.json(taskSave);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong creating a task',
        });
    }
}

export const findOnetask = async (req, res) => {
    const { id } = req.params
    try {
        const task = await Task.findById(id);
        if (!task)
            return res
                .status(404)
                .json({ message: `Task with id ${id} does not exists` });
        res.json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message || 'Something goes wrong creating a task',
        });
    }
}

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        message: 'Task were deleted successfully',
    });
};


export const findAllDoneTask = async (req, res) => {
    const tasks = await Task.find({ done: true });
    res.json(tasks)
}

export const updateTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        message: 'Task was update Successfully'
    })
}