const mongoose = require('mongoose');

const outdoorActivitySchema = new mongoose.Schema({
user_id : { type:  String, description: "Required Field", required: true },
activity_type : { type:  String, description: "Required Field", required: true },
title : { type:  String, description: "Required Field", required: true },
activity_date : { type:  String, description: "Required Field", required: true },
location : { type:  String, description: "Required Field", required: true },
description : { type:  String, description: "Required Field", required: true },
rating : { type:  String, description: "Required Field", required: true },
created_at : { type:  String, description: "Required Field", required: true },
updated_at : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('outdoorActivity', outdoorActivitySchema);