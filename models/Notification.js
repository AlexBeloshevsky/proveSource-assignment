const mongoose = require('mongoose');

const Notification = new mongoose.Schema({
  accountId: {type: String},
	name: {type: String},
	color: {type: String},

}, {timestamps: true});

module.exports = mongoose.model('Notification', Notification);
