const Joi = require("joi");

const createLecturer = {
  body: Joi.object().keys({
    maGiangVien: Joi.string().required(),
    hoTen: Joi.string().optional(),
    diaChi: Joi.string().optional(),
    soDienthoai: Joi.string().optional(),
  }),
};

const getLecturers = {
  query: Joi.object().keys({
    maGiangVien: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateStudent = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      hoTen: Joi.string().optional(),
      diaChi: Joi.string().optional(),
      soDienthoai: Joi.string().optional(),
    })
    .min(1),
};

const getLecturer = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

const deleteLecturer = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};

module.exports = {
  createLecturer,
  deleteLecturer,
  updateStudent,
  getLecturer,
  getLecturers,
};
