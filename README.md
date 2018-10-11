# async-run-once

让异步代码只运行一次
make async function run only one time.

### install
```bash
$ npm i -S async-run-once
```

### usage
```js
const { once, getOnceFn } = require('async-run-once');

const getName = () => new Promise((resolve) => {
    console.log(111);
    setTimeout(() => {
        resolve('hehe');
    }, 1000);
});

const newGetName = once(getName);

[...Array(10)].forEach(async () => {
    const name = await newGetName();
    // const name = await getName();
    console.log(name);
});

setTimeout(async () => {
    console.log('-----')
    const name = await newGetName();
    console.log('>>', name);
}, 3000)
```

