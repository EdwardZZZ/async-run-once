function once(fn) {
    if ( !(fn instanceof Promise || typeof fn === 'function') ) {
        throw new Error('arguments "fn" must be async function');
    }

    const queue = [];
    let running = false;
    let result = null;

    const runQueue = () => {
        running = false;
        queue.forEach(({ resolve, reject }) => {
            result ? resolve(result) : reject();
        });
        queue.length = 0;
    }

    return (...props) => new Promise((resolve, reject) => {
        if (result !== null) {
            resolve(result);
            return;
        }

        if (running) {
            queue.push({ resolve, reject });
            return;
        }

        running = true;
        (Promise.prototype.isPrototypeOf(fn) ? fn : fn(...props)).then((data) => {
            result = data;
            runQueue();
            resolve(result);
        }).catch((e) => {
            runQueue();
            reject(e);
        })
    });
};

// Map
const fnMap = {};
once.onceMap = function(fName, fn) {
    if (fName in fnMap) {
        return fnMap[fName];
    }

    const newFn = once(fn);
    fnMap[fName] = newFn;
    return newFn;
}

export default once;