(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.module = factory());
}(this, (function () { 'use strict';

function once(fn) {
    if (!(fn instanceof Promise || typeof fn === 'function')) {
        throw new Error('arguments "fn" must be async function');
    }

    var queue = [];
    var running = false;
    var result = null;

    var runQueue = function runQueue() {
        running = false;
        queue.forEach(function (_ref) {
            var resolve = _ref.resolve,
                reject = _ref.reject;

            result ? resolve(result) : reject();
        });
        queue.length = 0;
    };

    return function () {
        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        return new Promise(function (resolve, reject) {
            if (result) {
                resolve(result);
                return;
            }

            if (running) {
                queue.push({ resolve: resolve, reject: reject });
                return;
            }

            running = true;
            fn.apply(undefined, props).then(function (data) {
                result = data;
                runQueue();
                resolve(result);
            }).catch(function (e) {
                runQueue();
                reject(e);
            });
        });
    };
}

return once;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25jZShmbikge1xuICAgIGlmICggIShmbiBpbnN0YW5jZW9mIFByb21pc2UgfHwgdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcmd1bWVudHMgXCJmblwiIG11c3QgYmUgYXN5bmMgZnVuY3Rpb24nKTtcbiAgICB9XG5cbiAgICBjb25zdCBxdWV1ZSA9IFtdO1xuICAgIGxldCBydW5uaW5nID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICBjb25zdCBydW5RdWV1ZSA9ICgpID0+IHtcbiAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICBxdWV1ZS5mb3JFYWNoKCh7IHJlc29sdmUsIHJlamVjdCB9KSA9PiB7XG4gICAgICAgICAgICByZXN1bHQgPyByZXNvbHZlKHJlc3VsdCkgOiByZWplY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuICguLi5wcm9wcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgcXVldWUucHVzaCh7IHJlc29sdmUsIHJlamVjdCB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBmbiguLi5wcm9wcykudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gZGF0YTtcbiAgICAgICAgICAgIHJ1blF1ZXVlKCk7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBydW5RdWV1ZSgpO1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9KVxuICAgIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJvbmNlIiwiZm4iLCJQcm9taXNlIiwiRXJyb3IiLCJxdWV1ZSIsInJ1bm5pbmciLCJyZXN1bHQiLCJydW5RdWV1ZSIsImZvckVhY2giLCJyZXNvbHZlIiwicmVqZWN0IiwibGVuZ3RoIiwicHJvcHMiLCJwdXNoIiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVlLFNBQVNBLElBQVQsQ0FBY0MsRUFBZCxFQUFrQjtRQUN4QixFQUFFQSxjQUFjQyxPQUFkLElBQXlCLE9BQU9ELEVBQVAsS0FBYyxVQUF6QyxDQUFMLEVBQTREO2NBQ2xELElBQUlFLEtBQUosQ0FBVSx1Q0FBVixDQUFOOzs7UUFHRUMsUUFBUSxFQUFkO1FBQ0lDLFVBQVUsS0FBZDtRQUNJQyxTQUFTLElBQWI7O1FBRU1DLFdBQVcsU0FBWEEsUUFBVyxHQUFNO2tCQUNULEtBQVY7Y0FDTUMsT0FBTixDQUFjLGdCQUF5QjtnQkFBdEJDLE9BQXNCLFFBQXRCQSxPQUFzQjtnQkFBYkMsTUFBYSxRQUFiQSxNQUFhOztxQkFDMUJELFFBQVFILE1BQVIsQ0FBVCxHQUEyQkksUUFBM0I7U0FESjtjQUdNQyxNQUFOLEdBQWUsQ0FBZjtLQUxKOztXQVFPOzBDQUFJQyxLQUFKO2lCQUFBOzs7ZUFBYyxJQUFJVixPQUFKLENBQVksVUFBQ08sT0FBRCxFQUFVQyxNQUFWLEVBQXFCO2dCQUM5Q0osTUFBSixFQUFZO3dCQUNBQSxNQUFSOzs7O2dCQUlBRCxPQUFKLEVBQWE7c0JBQ0hRLElBQU4sQ0FBVyxFQUFFSixnQkFBRixFQUFXQyxjQUFYLEVBQVg7Ozs7c0JBSU0sSUFBVjtnQ0FDTUUsS0FBTixFQUFhRSxJQUFiLENBQWtCLFVBQUNDLElBQUQsRUFBVTt5QkFDZkEsSUFBVDs7d0JBRVFULE1BQVI7YUFISixFQUlHVSxLQUpILENBSVMsVUFBQ0MsQ0FBRCxFQUFPOzt1QkFFTEEsQ0FBUDthQU5KO1NBWmlCLENBQWQ7S0FBUDs7Ozs7In0=
