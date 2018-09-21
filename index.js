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

                                queue.push({ resolve: resolve, reject: reject });
                                return _context.abrupt("return");

                            case 6:
                                _context.prev = 6;

                                running = true;
                                _context.next = 10;
                                return promise.apply(undefined, props);

                            case 10:
                                result = _context.sent;

                                resolve(running);
                                _context.next = 17;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context["catch"](6);

                                reject(_context.t0);

                            case 17:

                                running = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvbmNlKHByb21pc2UpIHtcbiAgICBjb25zdCBxdWV1ZSA9IFtdO1xuICAgIGxldCBydW5uaW5nID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XG5cbiAgICByZXR1cm4gKC4uLnByb3BzKSA9PiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKHsgcmVzb2x2ZSwgcmVqZWN0IH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgcHJvbWlzZSguLi5wcm9wcyk7XG4gICAgICAgICAgICByZXNvbHZlKHJ1bm5pbmcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cblxuICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHF1ZXVlLmZvckVhY2goKHsgcmVzb2x2ZSwgcmVqZWN0IH0pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCA/IHJlc29sdmUocmVzdWx0KSA6IHJlamVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICB9KTtcbn07Il0sIm5hbWVzIjpbIm9uY2UiLCJwcm9taXNlIiwicXVldWUiLCJydW5uaW5nIiwicmVzdWx0IiwicHJvcHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInB1c2giLCJmb3JFYWNoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLElBQVQsQ0FBY0MsT0FBZCxFQUF1Qjs7O1FBQzVCQyxRQUFRLEVBQWQ7UUFDSUMsVUFBVSxLQUFkO1FBQ0lDLFNBQVMsSUFBYjs7V0FFTzswQ0FBSUMsS0FBSjtpQkFBQTs7O2VBQWMsSUFBSUMsT0FBSjs4RUFBWSxpQkFBT0MsT0FBUCxFQUFnQkMsTUFBaEI7Ozs7O3FDQUN6QkosTUFEeUI7Ozs7O3dDQUVqQkEsTUFBUjs7OztxQ0FJQUQsT0FOeUI7Ozs7O3NDQU9uQk0sSUFBTixDQUFXLEVBQUVGLGdCQUFGLEVBQVdDLGNBQVgsRUFBWDs7Ozs7OzBDQUtVLElBQVY7O3VDQUNlUCx5QkFBV0ksS0FBWCxDQWJVOzs7c0NBQUE7O3dDQWNqQkYsT0FBUjs7Ozs7Ozs7Ozs7OzBDQUtNLEtBQVY7c0NBQ01PLE9BQU4sQ0FBYyxpQkFBeUI7d0NBQXRCSCxPQUFzQixTQUF0QkEsT0FBc0I7d0NBQWJDLE1BQWEsU0FBYkEsTUFBYTs7NkNBQzFCRCxRQUFRSCxNQUFSLENBQVQsR0FBMkJJLFFBQTNCO2lDQURKO3NDQUdNRyxNQUFOLEdBQWUsQ0FBZjs7Ozs7Ozs7YUF2QmlCOzs7OztZQUFkO0tBQVA7Ozs7OyJ9
