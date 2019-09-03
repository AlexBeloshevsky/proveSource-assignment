const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Account = new mongoose.Schema({
	email: {type: String, required: true, unique: true},
	name: {type: String},
	age: {type: Number},

}, {timestamps: true});

Account.plugin(uniqueValidator, { message: "email already exists" });

module.exports = mongoose.model('Account', Account);
