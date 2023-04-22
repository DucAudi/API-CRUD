const { Lecturer } = require("../models/model");
const lecturerService = require("../services/lecturer.service");
const asyncHandler = require("express-async-handler");
const httpStatus = require("http-status");

const lecturerController = {
  addLeturer: asyncHandler(async (req, res) => {
    try {
      const saveLecturer = await lecturerService.createLecturer(req.body);
      res.status(httpStatus.CREATED).json(saveLecturer);
    } catch (error) {
      res.status(httpStatus[500]).json(error);
    }
  }),

  updateLeturer: asyncHandler(async (req, res) => {
    try {
      await lecturerService.updateLeturerById(req.params.id, req.body);
      res.status(httpStatus.CREATED).json("Update successfully!");
    } catch (error) {
      res.status(httpStatus[500]).json(error);
    }
  }),

  getAllLecturer: asyncHandler(async (req, res) => {
    try {
      const lecturer = await Lecturer.find();
      res.status(httpStatus.CREATED).json(lecturer);
    } catch (error) {
      res.status(httpStatus[500]).json(error);
    }
  }),

  getALecturer: asyncHandler(async (req, res) => {
    try {
      const lecturer = await lecturerService.getLecturerById(req.params.id);
      res.status(httpStatus.CREATED).json(lecturer);
    } catch (error) {
      res.status(httpStatus[500]).json(error);
    }
  }),

  deleteLeturer: async (req, res) => {
    await lecturerService.deleteLectureById(req.params.id);
    res.status(httpStatus.CREATED).json("Delete successfully");
  },
};

module.exports = lecturerController;
