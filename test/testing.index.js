const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../bin/www');


// mocha ./testing/testing.index.js

describe('index.controller', () => {
    describe('Get video items from playbuzz without filter', () => {
        it('Should return 5 items', (done) => {
            const data = { ourFilterQuery: '' };
            chai.request(server)
                .post(`/items`)
                .set('Content-Type', 'application/json')
                .send(data)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.lengthOf(5);
                    done()
                })
        })
    });
    describe('Get video items from playbuzz with filter of youtube', () => {
        it('Should return 3 items with source youtube', (done) => {
            const data = { ourFilterQuery: 'youtube' };
            chai.request(server)
                .post(`/items`)
                .set('Content-Type', 'application/json')
                .send(data)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    console.log(res.body);
                    expect(res.body).to.have.lengthOf(3);
                    expect(res.body[0].source).to.equal('youtube');
                    expect(res.body[1].source).to.equal('youtube');
                    expect(res.body[2].source).to.equal('youtube');
                    done()
                })

        })
    })
    describe('Get video items from playbuzz with filter of facebook', () => {
        it('Should return 1 items with source facebook', (done) => {
            const data = { ourFilterQuery: 'facebook' };
            chai.request(server)
                .post(`/items`)
                .set('Content-Type', 'application/json')
                .send(data)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    console.log(res.body);
                    expect(res.body).to.have.lengthOf(1);
                    expect(res.body[0].source).to.equal('facebook');
                    done()
                })

        })
    })
    describe('Get video items from playbuzz with filter of regular url', () => {
        it('Should return 1 items with source url', (done) => {
            const data = { ourFilterQuery: 'url' };
            chai.request(server)
                .post(`/items`)
                .set('Content-Type', 'application/json')
                .send(data)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    console.log(res.body);
                    expect(res.body).to.have.lengthOf(1);
                    expect(res.body[0].source).to.equal('url');
                    done()
                })

        })
    })
    describe('Get video items from playbuzz with filter of none', () => {
        it('Should return 5 items', (done) => {
            const data = { ourFilterQuery: 'none' };
            chai.request(server)
                .post(`/items`)
                .set('Content-Type', 'application/json')
                .send(data)
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    console.log(res.body);
                    expect(res.body).to.have.lengthOf(5);
                    done()
                })

        })
    })
});