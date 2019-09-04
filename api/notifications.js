const express = require('express');
const NotificationRouter = express.Router();
const Notification = require('../models/Notification');

NotificationRouter.post('/notifications', function (req, res, err) {
	if (err) {
		console.log(err);
	};
	const notification = new Notification({
		// accountId: req.body.accountId,
		name: req.body.name,
		color: req.body.color
	});
	notification.save()
		.then(notification => {
			res.json('Notification added successfully');
		})
		.catch(err => {
			console.log(err)
			res.status(400).send(err);
		});
});

module.exports = NotificationRouter;
