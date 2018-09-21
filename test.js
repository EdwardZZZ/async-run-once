const once = require('./index');
var expect = require('chai').expect;

let name = 'a';
const getName = () => new Promise((resolve) => {
    name += 'a';
    setTimeout(() => {
        resolve(name);
    }, 1000);
});

const newGetName = once(getName);

describe('test1..', function() {
    [...Array(6)].forEach(() => {
        it('aa', function(done) {
            newGetName().then(name => {
                expect(name).to.be.equal('aa');
                done();
            });
        });
    });
});

describe('test2..', function() {
    it('aa', function(done) {
        setTimeout(async () => {
            const name = await newGetName();
            expect(name).to.be.equal('aa');
            done();
        }, 1000)
    });
});