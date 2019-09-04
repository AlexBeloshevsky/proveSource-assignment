const request = require('supertest');
const db = require('../../db');
const app = require('../../app');
const Notification = require('../../models/Notification');


describe('POST /notifications', function () {
  beforeEach(() => {
    return db.deleteDb();
  })
  it('responds with json', function (done) {
    request(app)
      .post('/notifications')
      .send({ accountId: '5d6e82c289812c44c4d0cbe7', name: 'Alex', color: 'purple' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});


describe('Add a "GET /notifications?accountId=" API that returns the notifications for given accountId (query param)', function () {
  beforeEach(() => {
    return db.deleteDb();
  })
  it('responds with json', function (done) {
    const notification = new Notification({
      accountId: '5d6e82c289812c44c4d0cbe7',
      name: 'Alex',
      color: 'Purple'
    });
    notification.save()
      .then((res) => {
        request(app)
          .get('/notifications?accountId=5d6e82c289812c44c4d0cbe7')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);
            done();
          });
      }, (err) => {
        console.log(err);
        done(err);
      });
  });
});
