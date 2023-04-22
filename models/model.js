const mongoose = require("mongoose");

const lecturerSchema = new mongoose.Schema({
  maGiangVien: {
    type: String,
    require: true,
  },
  hoTen: {
    type: String,
    require: true,
  },
  diaChi: {
    type: String,
  },
  soDienthoai: {
    type: String,
  },
});

let Lecturer = mongoose.model("Lecturer", lecturerSchema);

module.exports = { Lecturer };
