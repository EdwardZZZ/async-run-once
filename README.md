# async-run-once

让异步代码只运行一次
make async function run only one time.

### usage
```
const once = require('async-run-once');

const getName = () => new Promise((resolve) => {
    console.log(111);
    setTimeout(() => {
        resolve('hehe');
    }, 1000);
});

const name = once(getName);

[...Array(10)].forEach(async () => {
    const name = await name();
    // const name = await getName();
    console.log(name);
});

setTimeout(async () => {
    console.log('-----')
    const name = await name();
    console.log('>>', name);
}, 3000)
```

