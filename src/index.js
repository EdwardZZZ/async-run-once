export default function once(fn) {
    if ( !(fn instanceof Promise || typeof fn === 'function') ) {
        throw new Error('arguments "fn" must be async function');
    }

    const queue = [];
    let running = false;
    let result = null;

    return (...props) => new Promise(async (resolve, reject) => {
        if (result) {
            resolve(result);
            return;
        }

        if (running) {
            queue.push({ resolve, reject });
            return;
        }

        try {
            running = true;
            result = await fn(...props);
            resolve(running);
        } catch (e) {
            reject(e);
        }

        running = false;
        queue.forEach(({ resolve, reject }) => {
            result ? resolve(result) : reject();
        });
        queue.length = 0;
    });
};