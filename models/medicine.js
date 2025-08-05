const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
user_id : { type:  String, description: "Required Field", required: true },
name : { type:  String, description: "Required Field", required: true },
dosage : { type:  String, description: "Required Field", required: true },
frequency : { type:  String, description: "Required Field", required: true },
start_date : { type:  String, description: "Required Field", required: true },
end_date : { type:  String, description: "Required Field", required: true },
instructions : { type:  String, description: "Required Field", required: true },
isActive : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('medicine', medicineSchema);