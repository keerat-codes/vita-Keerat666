const mongoose = require('mongoose');

const weightLogSchema = new mongoose.Schema({
user_id : { type:  String, description: "Required Field", required: true },
weight_kg : { type:  Number, description: "Required Field", required: true },
measured_at : { type:  String, description: "Required Field", required: true },
notes : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('weightLog', weightLogSchema);