const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
  Studentid: { type: Number, required: true },
  Name: { type: String, required: true },
  Roll: { type: Number, required: true },
  Birthday: { type: Date, required: true },
  Address: { type: String, required: true }
});


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
