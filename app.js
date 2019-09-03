const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const AccountRouter = require('./api/account/create');

	mongoose.connect('mongodb://localhost:27017/codeTest', {
		autoReconnect: true,
		reconnectTries: 60,
		reconnectInterval: 10000
	}).then(
		() => { console.log('Database is connected') },
		err => { console.log('Can not connect to the database' + err) }
	);

// app.listen(3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/account', AccountRouter);

console.log('app running on port 3000...');

module.exports = app;
