const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
user_id : { type:  String, description: "Required Field", required: true },
title : { type:  String, description: "Required Field", required: true },
description : { type:  String, description: "Required Field", required: true },
due_date : { type:  String, description: "Required Field", required: true },
priority : { type:  String, description: "Required Field", required: true },
status : { type:  String, description: "Required Field", required: true },
created_at : { type:  String, description: "Required Field", required: true },
updated_at : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('todo', todoSchema);