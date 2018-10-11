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

// Map
var fnMap = {};
once.onceMap = function (fName, fn) {
    if (fName in fnMap) {
        return fnMap[fName];
    }

    var newFn = once(fn);
    fnMap[fName] = newFn;
    return newFn;
};

return once;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgaWYgKCAhKGZuIGluc3RhbmNlb2YgUHJvbWlzZSB8fCB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3VtZW50cyBcImZuXCIgbXVzdCBiZSBhc3luYyBmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXVlID0gW107XG4gICAgbGV0IHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgIGNvbnN0IHJ1blF1ZXVlID0gKCkgPT4ge1xuICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHF1ZXVlLmZvckVhY2goKHsgcmVzb2x2ZSwgcmVqZWN0IH0pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCA/IHJlc29sdmUocmVzdWx0KSA6IHJlamVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gKC4uLnByb3BzKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKHsgcmVzb2x2ZSwgcmVqZWN0IH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgIGZuKC4uLnByb3BzKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQgPSBkYXRhO1xuICAgICAgICAgICAgcnVuUXVldWUoKTtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIHJ1blF1ZXVlKCk7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59O1xuXG4vLyBNYXBcbmNvbnN0IGZuTWFwID0ge307XG5vbmNlLm9uY2VNYXAgPSBmdW5jdGlvbihmTmFtZSwgZm4pIHtcbiAgICBpZiAoZk5hbWUgaW4gZm5NYXApIHtcbiAgICAgICAgcmV0dXJuIGZuTWFwW2ZOYW1lXTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdGbiA9IG9uY2UoZm4pO1xuICAgIGZuTWFwW2ZOYW1lXSA9IG5ld0ZuO1xuICAgIHJldHVybiBuZXdGbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb25jZTsiXSwibmFtZXMiOlsib25jZSIsImZuIiwiUHJvbWlzZSIsIkVycm9yIiwicXVldWUiLCJydW5uaW5nIiwicmVzdWx0IiwicnVuUXVldWUiLCJmb3JFYWNoIiwicmVzb2x2ZSIsInJlamVjdCIsImxlbmd0aCIsInByb3BzIiwicHVzaCIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJlIiwiZm5NYXAiLCJvbmNlTWFwIiwiZk5hbWUiLCJuZXdGbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsU0FBU0EsSUFBVCxDQUFjQyxFQUFkLEVBQWtCO1FBQ1QsRUFBRUEsY0FBY0MsT0FBZCxJQUF5QixPQUFPRCxFQUFQLEtBQWMsVUFBekMsQ0FBTCxFQUE0RDtjQUNsRCxJQUFJRSxLQUFKLENBQVUsdUNBQVYsQ0FBTjs7O1FBR0VDLFFBQVEsRUFBZDtRQUNJQyxVQUFVLEtBQWQ7UUFDSUMsU0FBUyxJQUFiOztRQUVNQyxXQUFXLFNBQVhBLFFBQVcsR0FBTTtrQkFDVCxLQUFWO2NBQ01DLE9BQU4sQ0FBYyxnQkFBeUI7Z0JBQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7Z0JBQWJDLE1BQWEsUUFBYkEsTUFBYTs7cUJBQzFCRCxRQUFRSCxNQUFSLENBQVQsR0FBMkJJLFFBQTNCO1NBREo7Y0FHTUMsTUFBTixHQUFlLENBQWY7S0FMSjs7V0FRTzswQ0FBSUMsS0FBSjtpQkFBQTs7O2VBQWMsSUFBSVYsT0FBSixDQUFZLFVBQUNPLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtnQkFDOUNKLE1BQUosRUFBWTt3QkFDQUEsTUFBUjs7OztnQkFJQUQsT0FBSixFQUFhO3NCQUNIUSxJQUFOLENBQVcsRUFBRUosZ0JBQUYsRUFBV0MsY0FBWCxFQUFYOzs7O3NCQUlNLElBQVY7Z0NBQ01FLEtBQU4sRUFBYUUsSUFBYixDQUFrQixVQUFDQyxJQUFELEVBQVU7eUJBQ2ZBLElBQVQ7O3dCQUVRVCxNQUFSO2FBSEosRUFJR1UsS0FKSCxDQUlTLFVBQUNDLENBQUQsRUFBTzs7dUJBRUxBLENBQVA7YUFOSjtTQVppQixDQUFkO0tBQVA7Ozs7QUF3QkosSUFBTUMsUUFBUSxFQUFkO0FBQ0FsQixLQUFLbUIsT0FBTCxHQUFlLFVBQVNDLEtBQVQsRUFBZ0JuQixFQUFoQixFQUFvQjtRQUMzQm1CLFNBQVNGLEtBQWIsRUFBb0I7ZUFDVEEsTUFBTUUsS0FBTixDQUFQOzs7UUFHRUMsUUFBUXJCLEtBQUtDLEVBQUwsQ0FBZDtVQUNNbUIsS0FBTixJQUFlQyxLQUFmO1dBQ09BLEtBQVA7Q0FQSixDQVVBOzs7OyJ9
