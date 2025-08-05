const mongoose = require('mongoose');

const dateReminderSchema = new mongoose.Schema({
user_id : { type:  String, description: "Required Field", required: true },
title : { type:  String, description: "Required Field", required: true },
date : { type:  String, description: "Required Field", required: true },
reminder_date : { type:  String, description: "Required Field", required: true },
notes : { type:  String, description: "Required Field", required: true },
category : { type:  String, description: "Required Field", required: true },
created_at : { type:  String, description: "Required Field", required: true },
updated_at : { type:  String, description: "Required Field", required: true },
description : { type:  String, description: "Required Field", required: true },
yearly_repeat : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('dateReminder', dateReminderSchema);