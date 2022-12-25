const Task = require("../model/TaskModel");
const asyncWrapper = require("../middlewares/asyncWrapper");
const { customErrorFunc } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOne({ _id: req.params.id });
  if (!task) {
    return next(customErrorFunc(`No task with id ${req.params.id}`, 404));
    // return res.status(404).json({ msg: `No task with id ${req.params.id}` });
  }
  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    runValidators: true,
    new: true,
  });
  if (!task) {
    return next(customErrorFunc(`No task with id ${req.params.id}`, 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id });
  if (!task) {
    return next(customErrorFunc(`No task with id ${req.params.id}`, 404));
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
