const getAllTasks = (req, res) => {
  res.send("Get all Tasks");
};
const getTask = (req, res) => {
  res.send("Get single Task");
};
const createTask = (req, res) => {
  res.json(req.body);
};
const updateTask = (req, res) => {
  res.send("Update Task");
};
const deleteTask = (req, res) => {
  res.send("Delete Task");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
