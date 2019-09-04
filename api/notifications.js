const express = require('express');
const NotificationRouter = express.Router();
const Notification = require('../models/Notification');

NotificationRouter.post('/notifications', function (req, res) {
	const notification = new Notification({
		accountId: req.body.accountId,
		name: req.body.name,
		color: req.body.color
	});
	notification.save()
		.then(() => {
			res.json('Notification added successfully');
		})
		.catch(err => {
			res.status(400).send(err);
		});
});

NotificationRouter.get('/notifications', function (req, res) {
	const queryParams = req.query;
	Notification.find({'accountId': queryParams.accountId}).exec(function(err, notifications) {
		if (err) {
			res.status(400).send(err);
			return;
		};
		res.send(notifications);
	});
});

NotificationRouter.delete('/notifications', function (req, res) {
	const queryParams = req.query;
	Notification.remove({'accountId': queryParams.accountId, 'color': queryParams.color}).exec(function(err, notifications) {
		if (err) {
			res.status(400).send(err);
			return;
		};
		res.send(notifications);
	})
})

module.exports = NotificationRouter;
