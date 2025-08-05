const mongoose = require('mongoose');

const enumControlSchema = new mongoose.Schema({
model_name : { type:  String, description: "Required Field", required: true },
field_name : { type:  String, description: "Required Field", required: true },
value : { type:  String, description: "Required Field", required: true },
created_at : { type:  String, description: "Required Field", required: true },
updated_at : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('enumControl', enumControlSchema);