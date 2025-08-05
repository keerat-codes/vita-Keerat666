const mongoose = require('mongoose');

const travelHistorySchema = new mongoose.Schema({
user_id : { type:  String, description: "Required Field", required: true },
location : { type:  String, description: "Required Field", required: true },
start_date : { type:  String, description: "Required Field", required: true },
end_date : { type:  String, description: "Required Field", required: true },
note : { type:  String, description: "Required Field", required: true },
created_at : { type:  String, description: "Required Field", required: true },
updated_at : { type:  String, description: "Required Field", required: true },
people_met : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('travelHistory', travelHistorySchema);