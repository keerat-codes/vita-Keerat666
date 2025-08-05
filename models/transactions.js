const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema({
user_id : { type:  String, description: "Required Field", required: true },
amount : { type:  String, description: "Required Field", required: true },
type : { type:  String, description: "Required Field", required: true },
category : { type:  String, description: "Required Field", required: true },
tags : { type:  String, description: "Required Field", required: true },
date : { type:  String, description: "Required Field", required: true },
description : { type:  String, description: "Required Field", required: true },
payment_method : { type:  String, description: "Required Field", required: true },
created_at : { type:  String, description: "Required Field", required: true },
updated_at : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('transactions', transactionsSchema);