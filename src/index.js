export default function once(promise) {
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
            result = await promise(...props);
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