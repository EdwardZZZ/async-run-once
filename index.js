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
            if (result !== null) {
                resolve(result);
                return;
            }

            if (running) {
                queue.push({ resolve: resolve, reject: reject });
                return;
            }

            running = true;
            (Promise.prototype.isPrototypeOf(fn) ? fn : fn.apply(undefined, props)).then(function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBvbmNlKGZuKSB7XG4gICAgaWYgKCAhKGZuIGluc3RhbmNlb2YgUHJvbWlzZSB8fCB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FyZ3VtZW50cyBcImZuXCIgbXVzdCBiZSBhc3luYyBmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXVlID0gW107XG4gICAgbGV0IHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgIGNvbnN0IHJ1blF1ZXVlID0gKCkgPT4ge1xuICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHF1ZXVlLmZvckVhY2goKHsgcmVzb2x2ZSwgcmVqZWN0IH0pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCA/IHJlc29sdmUocmVzdWx0KSA6IHJlamVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gKC4uLnByb3BzKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKHsgcmVzb2x2ZSwgcmVqZWN0IH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgIChQcm9taXNlLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGZuKSA/IGZuIDogZm4oLi4ucHJvcHMpKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQgPSBkYXRhO1xuICAgICAgICAgICAgcnVuUXVldWUoKTtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgIHJ1blF1ZXVlKCk7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59O1xuXG4vLyBNYXBcbmNvbnN0IGZuTWFwID0ge307XG5vbmNlLm9uY2VNYXAgPSBmdW5jdGlvbihmTmFtZSwgZm4pIHtcbiAgICBpZiAoZk5hbWUgaW4gZm5NYXApIHtcbiAgICAgICAgcmV0dXJuIGZuTWFwW2ZOYW1lXTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdGbiA9IG9uY2UoZm4pO1xuICAgIGZuTWFwW2ZOYW1lXSA9IG5ld0ZuO1xuICAgIHJldHVybiBuZXdGbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb25jZTsiXSwibmFtZXMiOlsib25jZSIsImZuIiwiUHJvbWlzZSIsIkVycm9yIiwicXVldWUiLCJydW5uaW5nIiwicmVzdWx0IiwicnVuUXVldWUiLCJmb3JFYWNoIiwicmVzb2x2ZSIsInJlamVjdCIsImxlbmd0aCIsInByb3BzIiwicHVzaCIsInByb3RvdHlwZSIsImlzUHJvdG90eXBlT2YiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiZSIsImZuTWFwIiwib25jZU1hcCIsImZOYW1lIiwibmV3Rm4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLElBQVQsQ0FBY0MsRUFBZCxFQUFrQjtRQUNULEVBQUVBLGNBQWNDLE9BQWQsSUFBeUIsT0FBT0QsRUFBUCxLQUFjLFVBQXpDLENBQUwsRUFBNEQ7Y0FDbEQsSUFBSUUsS0FBSixDQUFVLHVDQUFWLENBQU47OztRQUdFQyxRQUFRLEVBQWQ7UUFDSUMsVUFBVSxLQUFkO1FBQ0lDLFNBQVMsSUFBYjs7UUFFTUMsV0FBVyxTQUFYQSxRQUFXLEdBQU07a0JBQ1QsS0FBVjtjQUNNQyxPQUFOLENBQWMsZ0JBQXlCO2dCQUF0QkMsT0FBc0IsUUFBdEJBLE9BQXNCO2dCQUFiQyxNQUFhLFFBQWJBLE1BQWE7O3FCQUMxQkQsUUFBUUgsTUFBUixDQUFULEdBQTJCSSxRQUEzQjtTQURKO2NBR01DLE1BQU4sR0FBZSxDQUFmO0tBTEo7O1dBUU87MENBQUlDLEtBQUo7aUJBQUE7OztlQUFjLElBQUlWLE9BQUosQ0FBWSxVQUFDTyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7Z0JBQzlDSixXQUFXLElBQWYsRUFBcUI7d0JBQ1RBLE1BQVI7Ozs7Z0JBSUFELE9BQUosRUFBYTtzQkFDSFEsSUFBTixDQUFXLEVBQUVKLGdCQUFGLEVBQVdDLGNBQVgsRUFBWDs7OztzQkFJTSxJQUFWO2FBQ0NSLFFBQVFZLFNBQVIsQ0FBa0JDLGFBQWxCLENBQWdDZCxFQUFoQyxJQUFzQ0EsRUFBdEMsR0FBMkNBLG9CQUFNVyxLQUFOLENBQTVDLEVBQTBESSxJQUExRCxDQUErRCxVQUFDQyxJQUFELEVBQVU7eUJBQzVEQSxJQUFUOzt3QkFFUVgsTUFBUjthQUhKLEVBSUdZLEtBSkgsQ0FJUyxVQUFDQyxDQUFELEVBQU87O3VCQUVMQSxDQUFQO2FBTko7U0FaaUIsQ0FBZDtLQUFQOzs7O0FBd0JKLElBQU1DLFFBQVEsRUFBZDtBQUNBcEIsS0FBS3FCLE9BQUwsR0FBZSxVQUFTQyxLQUFULEVBQWdCckIsRUFBaEIsRUFBb0I7UUFDM0JxQixTQUFTRixLQUFiLEVBQW9CO2VBQ1RBLE1BQU1FLEtBQU4sQ0FBUDs7O1FBR0VDLFFBQVF2QixLQUFLQyxFQUFMLENBQWQ7VUFDTXFCLEtBQU4sSUFBZUMsS0FBZjtXQUNPQSxLQUFQO0NBUEosQ0FVQTs7OzsifQ==
