
export default function runOnce(promise) {
    const ee = new EventEmitter();
    const eeId = +new Date();
    let running = false;
    let result = null;
    return (...props) => new Promise((resolve, reject) => {
        if (result) {
            resolve(result);
            return;
        }

        if (running) {
            ee.once(eeId, ({ data, err }) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data);
            });
            return;
        }

        running = true;
        promise(...props).then(data => {
            result = data;
            resolve(data);
            ee.emit(eeId, { data });
        }).catch(err => {
            running = false;
            reject({ err });
            ee.emit(eeId, { err });
        });
    });
};

