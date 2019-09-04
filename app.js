const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const AccountRouter = require('./api/account');
const NotificationRouter = require('./api/notifications')
require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', NotificationRouter);
app.use('/account', AccountRouter);

module.exports = app;
