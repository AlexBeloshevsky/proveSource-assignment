const express = require('express');
const AccountRouter = express.Router();
const Account = require('../models/Account');

AccountRouter.post('/create', function (req, res) {
	const account = new Account({
		email: req.body.email,
		name: req.body.name,
		age: req.body.age
	});
	account.save()
		.then(() => {
			res.json('Account added successfully');
		})
		.catch(err => {
			if (err.message === "Account validation failed: email: email already exists") {
				res.status(400).send("email already exists")
			}
			res.status(400).send(err);
		});
});

module.exports = AccountRouter;
