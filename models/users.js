const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
email : { type:  String, description: "Required Field", required: true },
first_name : { type:  String, description: "Required Field", required: true },
profile_image_url : { type:  String, description: "Required Field", required: true },
created_at : { type:  String, description: "Required Field", required: true },
last_login : { type:  String, description: "Required Field", required: true },
is_active : { type:  String, description: "Required Field", required: true },
last_name : { type:  String, description: "Required Field", required: true },
nickname : { type:  String, description: "Required Field", required: true },
date_of_birth : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('users', usersSchema);