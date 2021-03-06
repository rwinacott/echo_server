import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;


describe('echo.test.ts TEST api/v1/echo path', () => {
/*
  it('Echo: GET results in a 501 error.', () => {
    return chai.request(app).get('/api/v1/echo')
      .then(res => {
        expect(res.status).to.equal(501);
      });
  });

  it('Echo: PUT results in a 501 error.', () => {
    chai.request(app).put('/api/v1/echo')
      .then(res => {
        expect(res.status).to.equal(501);
      });
  });
  */
  
  it('Echo: POST results in a 200 OKAY.', () => {
    return chai.request(app).post('/api/v1/echo')
      .then(res => {
        expect(res.status).to.equal(200);
      });
  });

});

/*
describe('GET api/v1/echo/:error', () => {

  it('Echo: responds with the error code', () => {
    return chai.request(app).get('/api/v1/echo/500')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      });
  });

  it('Echo: should return Luke Cage', () => {
    return chai.request(app).get('/api/v1/echo/500')
      .then(res => {
        expect(res.body.hero.name).to.equal('Luke Cage');
      });
  });
});
*/
