const once = require('./index');
var expect = require('chai').expect;

const getName = (n) => new Promise((resolve) => {
    console.log('--', n)

    n += 100;
    setTimeout(() => {
        resolve(n);
    }, 1000);
});

const newGetName = once(getName);

const map = new Map();
const getOnceFn = (fName) => {
    if (map.has(fName)) {
        return map.get(fName);
    }

    const newGetName = once(getName);
    map.set(fName, newGetName);
    return newGetName;
}

(async () => {
    [...Array(10)].forEach(async (_, i) => {
        const n = await getOnceFn(1)(i);
        console.log(n);
    });

    [...Array(10)].forEach(async (_, i) => {
        const n = await getOnceFn(2)(i + 10);
        console.log(n);
    });
})()