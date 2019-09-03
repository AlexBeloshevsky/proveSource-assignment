const request = require('supertest');

const app = require('../../../app');

describe('POST /account/create', function () {
  it('responds with json', function (done) {
    request(app)
      .post('/account/create')
      .send({ email: 'alex11@test.com', name: 'Alex', age: 35 })
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

describe('POST /account/create', function () {
  it('fails as expected when the same email is entered twice', function (done) {
    request(app)
      .post('/account/create')
      .send([{ email: 'alex123@test.com', name: 'Alex', age: 35 }, { email: 'alex123@test.com', name: 'Alex', age: 35 }])
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});