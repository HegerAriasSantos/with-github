const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app'); // Assuming your app.js is in the parent directory
const expect = chai.expect;

chai.use(chaiHttp);

describe('App', () => {
  it('should return "Hello, World!" on / GET', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});