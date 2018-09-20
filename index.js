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

                                resolve(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uY2UocHJvbWlzZSkge1xuICAgIGNvbnN0IHF1ZXVlID0gW11cbiAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuXG4gICAgcmV0dXJuICguLi5wcm9wcykgPT4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgcXVldWUucHVzaCh7IHJlc29sdmUsIHJlamVjdCwgcHJvcHMgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBwcm9taXNlKC4uLnByb3BzKTtcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlLmZvckVhY2goKHsgcmVzb2x2ZSwgcmVqZWN0IH0pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCA/IHJlc29sdmUocmVzdWx0KSA6IHJlamVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICB9KTtcbn07XG5cbiJdLCJuYW1lcyI6WyJvbmNlIiwicHJvbWlzZSIsInF1ZXVlIiwicnVubmluZyIsInJlc3VsdCIsInByb3BzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwdXNoIiwiZGF0YSIsImZvckVhY2giLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2UsU0FBU0EsSUFBVCxDQUFjQyxPQUFkLEVBQXVCOzs7UUFDNUJDLFFBQVEsRUFBZDtRQUNJQyxVQUFVLEtBQWQ7UUFDSUMsU0FBUyxJQUFiOztXQUVPOzBDQUFJQyxLQUFKO2lCQUFBOzs7ZUFBYyxJQUFJQyxPQUFKOzhFQUFZLGlCQUFPQyxPQUFQLEVBQWdCQyxNQUFoQjs7Ozs7cUNBQ3pCSixNQUR5Qjs7Ozs7d0NBRWpCQSxNQUFSOzs7O3FDQUlBRCxPQU55Qjs7Ozs7c0NBT25CTSxJQUFOLENBQVcsRUFBRUYsZ0JBQUYsRUFBV0MsY0FBWCxFQUFtQkgsWUFBbkIsRUFBWDs7Ozs7OzBDQUtVLElBQVY7O3VDQUNlSix5QkFBV0ksS0FBWCxDQWJVOzs7c0NBQUE7O3dDQWNqQkssSUFBUjs7Ozs7Ozs7MENBRVUsS0FBVjs7Ozs7c0NBSUVDLE9BQU4sQ0FBYyxpQkFBeUI7d0NBQXRCSixPQUFzQixTQUF0QkEsT0FBc0I7d0NBQWJDLE1BQWEsU0FBYkEsTUFBYTs7NkNBQzFCRCxRQUFRSCxNQUFSLENBQVQsR0FBMkJJLFFBQTNCO2lDQURKO3NDQUdNSSxNQUFOLEdBQWUsQ0FBZjs7Ozs7Ozs7YUF2QmlCOzs7OztZQUFkO0tBQVA7Ozs7OyJ9
