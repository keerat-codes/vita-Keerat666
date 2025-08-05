const mongoose = require('mongoose');

const historyLogSchema = new mongoose.Schema({
user_id : { type:  String, description: "Required Field", required: true },
action_text : { type:  String, description: "Required Field", required: true },
model_name : { type:  String, description: "Required Field", required: true },
record_id : { type:  String, description: "Required Field", required: true },
operation : { type:  String, description: "Required Field", required: true },
timestamp : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('historyLog', historyLogSchema);