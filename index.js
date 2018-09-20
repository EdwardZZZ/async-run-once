(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.module = factory());
}(this, (function () { 'use strict';

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

function once(promise) {
    var _this = this;

    var queue = [];
    var running = false;
    var result = null;

    return function () {
        for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
            props[_key] = arguments[_key];
        }

        return new Promise(function () {
            var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!result) {
                                    _context.next = 3;
                                    break;
                                }

                                resolve(result);
                                return _context.abrupt("return");

                            case 3:
                                if (!running) {
                                    _context.next = 6;
                                    break;
                                }

                                queue.push({ resolve: resolve, reject: reject, props: props });
                                return _context.abrupt("return");

                            case 6:
                                _context.prev = 6;

                                running = true;
                                _context.next = 10;
                                return promise.apply(undefined, props);

                            case 10:
                                result = _context.sent;

                                resolve(running);
                                _context.next = 18;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context["catch"](6);

                                running = false;
                                reject(_context.t0);

                            case 18:

                                queue.forEach(function (_ref2) {
                                    var resolve = _ref2.resolve,
                                        reject = _ref2.reject;

                                    result ? resolve(result) : reject();
                                });
                                queue.length = 0;

                            case 20:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this, [[6, 14]]);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());
    };
}

return once;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvbmNlKHByb21pc2UpIHtcbiAgICBjb25zdCBxdWV1ZSA9IFtdXG4gICAgbGV0IHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcblxuICAgIHJldHVybiAoLi4ucHJvcHMpID0+IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goeyByZXNvbHZlLCByZWplY3QsIHByb3BzIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgcHJvbWlzZSguLi5wcm9wcyk7XG4gICAgICAgICAgICByZXNvbHZlKHJ1bm5pbmcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZS5mb3JFYWNoKCh7IHJlc29sdmUsIHJlamVjdCB9KSA9PiB7XG4gICAgICAgICAgICByZXN1bHQgPyByZXNvbHZlKHJlc3VsdCkgOiByZWplY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgfSk7XG59OyJdLCJuYW1lcyI6WyJvbmNlIiwicHJvbWlzZSIsInF1ZXVlIiwicnVubmluZyIsInJlc3VsdCIsInByb3BzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwdXNoIiwiZm9yRWFjaCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxJQUFULENBQWNDLE9BQWQsRUFBdUI7OztRQUM1QkMsUUFBUSxFQUFkO1FBQ0lDLFVBQVUsS0FBZDtRQUNJQyxTQUFTLElBQWI7O1dBRU87MENBQUlDLEtBQUo7aUJBQUE7OztlQUFjLElBQUlDLE9BQUo7OEVBQVksaUJBQU9DLE9BQVAsRUFBZ0JDLE1BQWhCOzs7OztxQ0FDekJKLE1BRHlCOzs7Ozt3Q0FFakJBLE1BQVI7Ozs7cUNBSUFELE9BTnlCOzs7OztzQ0FPbkJNLElBQU4sQ0FBVyxFQUFFRixnQkFBRixFQUFXQyxjQUFYLEVBQW1CSCxZQUFuQixFQUFYOzs7Ozs7MENBS1UsSUFBVjs7dUNBQ2VKLHlCQUFXSSxLQUFYLENBYlU7OztzQ0FBQTs7d0NBY2pCRixPQUFSOzs7Ozs7OzswQ0FFVSxLQUFWOzs7OztzQ0FJRU8sT0FBTixDQUFjLGlCQUF5Qjt3Q0FBdEJILE9BQXNCLFNBQXRCQSxPQUFzQjt3Q0FBYkMsTUFBYSxTQUFiQSxNQUFhOzs2Q0FDMUJELFFBQVFILE1BQVIsQ0FBVCxHQUEyQkksUUFBM0I7aUNBREo7c0NBR01HLE1BQU4sR0FBZSxDQUFmOzs7Ozs7OzthQXZCaUI7Ozs7O1lBQWQ7S0FBUDs7Ozs7In0=
