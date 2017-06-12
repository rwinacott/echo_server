import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('helloWorld.test.ts TEST baseRoute / path', () => {

  it('GET / should be html', () => {
    return chai.request(app).get('/')
    .then(res => {
      expect(res.type).to.eql('text/html');
    });
  });

/*
  it('Should start with a H1 header', () => {
    return chai.request(app).get('/')
    .then(res => {
      expect(res.body.H1).to.eql('Echo-Server');
    });
  });
*/
});
