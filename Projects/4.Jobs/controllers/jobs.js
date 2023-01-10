const { StatusCodes } = require("http-status-codes");
const Job = require("../models/Job");

const getAllJobs = async (req, res) => {
  res.send("GetAllJobs");
};
const getJob = async (req, res) => {
  res.send("GetJob");
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
  // res.json(req.user.userId);
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
