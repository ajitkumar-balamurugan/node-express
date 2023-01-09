const getAllJobs = async (req, res) => {
  res.send("GetAllJobs");
};
const getJob = async (req, res) => {
  res.send("GetJob");
};

const createJob = async (req, res) => {
  res.json(req.user);
};

const deleteJob = async (req, res) => {
  res.send("DeleteJob");
};

const updateJob = async (req, res) => {
  res.send("UpdateJob");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  deleteJob,
  updateJob,
};
