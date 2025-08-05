const mongoose = require('mongoose');

const bloodPressureSchema = new mongoose.Schema({
user_id : { type:  String, description: "Required Field", required: true },
systolic : { type:  Number, description: "Required Field", required: true },
diastolic : { type:  Number, description: "Required Field", required: true },
pulse : { type:  Number, description: "Required Field", required: true },
measured_at : { type:  String, description: "Required Field", required: true },
notes : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('bloodPressure', bloodPressureSchema);