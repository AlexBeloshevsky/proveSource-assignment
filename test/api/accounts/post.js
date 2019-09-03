const request = require('supertest');

const app = require('../../../app');

describe('POST /account/create', function () {
  it('responds with json', function (done) {
    request(app)
      .post('/account/create')
      .send({ email: 'john@test.com' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe('POST /account/create', function () {
  it('fails as expected when no email is provided', function (done) {
    request(app)
      .post('/account/create')
      .send({ email: '' })
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
