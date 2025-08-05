const mongoose = require('mongoose');

const glucoseLogSchema = new mongoose.Schema({
user_id : { type:  String, description: "Required Field", required: true },
glucose_level : { type:  Number, description: "Required Field", required: true },
measurement_type : { type:  String, description: "Required Field", required: true },
measured_at : { type:  String, description: "Required Field", required: true },
notes : { type:  String, description: "Required Field", required: true },
timestamp : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('glucoseLog', glucoseLogSchema);