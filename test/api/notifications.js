const request = require('supertest');
const db = require('../../db');
const app = require('../../app');


describe('POST /notifications', function () {
  beforeEach(() => {
    return db.deleteDb();
  })
  it('responds with json', function (done) {
    request(app)
      .post('/notifications')
      .send({  name: 'Alex', color: 'purple' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
