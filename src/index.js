
export default function once(promise) {
    const queue = []
    let running = false;
    let result = null;

    return (...props) => new Promise(async (resolve, reject) => {
        if (result) {
            resolve(result);
            return;
        }

        if (running) {
            queue.push({ resolve, reject, props });
            return;
        }

        try {
            running = true;
            result = await promise(...props);
            resolve(data);
        } catch (e) {
            running = false;
            reject(e);
        }

        queue.forEach(({ resolve, reject }) => {
            result ? resolve(result) : reject();
        });
        queue.length = 0;
    });
};

