const express = require('express');
const AccountRouter = express.Router();
const Account = require('../../models/account/Account');

AccountRouter.post('/create', function (req, res, err) {
	if (err) {
		console.log(err);
	};
	let account = new Account({
		email: req.body.email,
		name: req.body.name,
		age: req.body.age
	});
	account.save()
		.then(account => {
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
