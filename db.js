const mongoose = require('mongoose');
const Account = require('./models/Account');
const Notification = require('./models/Notification');
const dbName = process.env.NODE_ENV === 'test' ? 'test' : 'codeTest';

console.log("dbNAME:" + dbName);

const deleteDb = () => {
  return Promise.all([Notification.remove({}), Account.remove({})]);
}

const db = mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
  autoReconnect: true,
  reconnectTries: 60,
  reconnectInterval: 10000
}).then(
  () => { console.log('Database is connected') },
  err => {
    console.log('Can not connect to the database' + err);
    throw err;
  }
);

module.exports = {db, deleteDb};