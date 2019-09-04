const express = require('express');
const NotificationRouter = express.Router();
const Notification = require('../models/Notification');

NotificationRouter.post('/notifications', function (req, res, next) {
	const notification = new Notification({
		accountId: req.body.accountId,
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

NotificationRouter.get('/notifications', function (req, res, next) {
	const queryParams = req.query;
	Notification.find({'accountId': queryParams.accountId}).exec(function(err, notifications) {
		if (err) {
			console.log (err);
		};
		res.send(notifications);
	})
})

module.exports = NotificationRouter;
