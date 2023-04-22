const asyncHandler = require("express-async-handler");
const httpStatus = require("http-status");
const { Lecturer } = require("../models/model");
const ApiError = require("../utils/ApiError");

/**
 * @param {Object} lecturerBody
 * @returns {Promise<Lecturer>}
 */

const createLecturer = asyncHandler(async (lecturerBody) => {
  return Lecturer.create(lecturerBody);
});

/**
 * @param {ObjectId} id
 * @returns {Promise<Lecturer>}
 */

const getLecturerById = asyncHandler(async (id) => {
  const letturer = await Lecturer.findById(id);
  return letturer;
});

/**
 * @param {ObjectId} lecturerId
 * @returns {Promise<Lecturer>}
 */

const deleteLectureById = asyncHandler(async (lecturerId) => {
  const letturer = await Lecturer.findByIdAndDelete(lecturerId);
  // // if (!letturer) {
  // throw new ApiError(httpStatus.NOT_FOUND, "Lecture not found");
  // // }
  return letturer;
});

/**
 * @param {ObjectId} lecturerId
 * @param {Object} updateBody
 * @returns {Promise<Lecturer>}
 */
const updateLeturerById = asyncHandler(async (lecturerId, updateBody) => {
  const lecturer = await Lecturer.findById(lecturerId);

  if (!lecturer) {
    res.status(404).json("Lecturer not found!");
  }

  await lecturer.updateOne({ $set: updateBody });
  return lecturer;
});

module.exports = {
  createLecturer,
  getLecturerById,
  deleteLectureById,
  updateLeturerById,
};
