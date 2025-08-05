const mongoose = require('mongoose');

const medicineIntakeLogSchema = new mongoose.Schema({
user_id : { type:  String, description: "Required Field", required: true },
medicine_id : { type:  String, description: "Required Field", required: true },
taken_at : { type:  String, description: "Required Field", required: true },
note : { type:  String, description: "Required Field", required: true },
timestamp : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('medicineIntakeLog', medicineIntakeLogSchema);