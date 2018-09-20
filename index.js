(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.module = factory());
}(this, (function () { 'use strict';

function runOnce(promise) {
    var ee = new EventEmitter();
    var eeId = +new Date();
    var running = false;
    var result = null;
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
                ee.once(eeId, function (_ref) {
                    var data = _ref.data,
                        err = _ref.err;

                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(data);
                });
                return;
            }

            running = true;
            promise.apply(undefined, props).then(function (data) {
                result = data;
                resolve(data);
                ee.emit(eeId, { data: data });
            }).catch(function (err) {
                running = false;
                reject({ err: err });
                ee.emit(eeId, { err: err });
            });
        });
    };
}

return runOnce;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1bk9uY2UocHJvbWlzZSkge1xuICAgIGNvbnN0IGVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGNvbnN0IGVlSWQgPSArbmV3IERhdGUoKTtcbiAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIHJldHVybiAoLi4ucHJvcHMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgIGVlLm9uY2UoZWVJZCwgKHsgZGF0YSwgZXJyIH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBwcm9taXNlKC4uLnByb3BzKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gZGF0YTtcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICBlZS5lbWl0KGVlSWQsIHsgZGF0YSB9KTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlamVjdCh7IGVyciB9KTtcbiAgICAgICAgICAgIGVlLmVtaXQoZWVJZCwgeyBlcnIgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuIl0sIm5hbWVzIjpbInJ1bk9uY2UiLCJwcm9taXNlIiwiZWUiLCJFdmVudEVtaXR0ZXIiLCJlZUlkIiwiRGF0ZSIsInJ1bm5pbmciLCJyZXN1bHQiLCJwcm9wcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25jZSIsImRhdGEiLCJlcnIiLCJ0aGVuIiwiZW1pdCIsImNhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDZSxTQUFTQSxPQUFULENBQWlCQyxPQUFqQixFQUEwQjtRQUMvQkMsS0FBSyxJQUFJQyxZQUFKLEVBQVg7UUFDTUMsT0FBTyxDQUFDLElBQUlDLElBQUosRUFBZDtRQUNJQyxVQUFVLEtBQWQ7UUFDSUMsU0FBUyxJQUFiO1dBQ087MENBQUlDLEtBQUo7aUJBQUE7OztlQUFjLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7Z0JBQzlDSixNQUFKLEVBQVk7d0JBQ0FBLE1BQVI7Ozs7Z0JBSUFELE9BQUosRUFBYTttQkFDTk0sSUFBSCxDQUFRUixJQUFSLEVBQWMsZ0JBQW1CO3dCQUFoQlMsSUFBZ0IsUUFBaEJBLElBQWdCO3dCQUFWQyxHQUFVLFFBQVZBLEdBQVU7O3dCQUN6QkEsR0FBSixFQUFTOytCQUNFQSxHQUFQOzs7NEJBR0lELElBQVI7aUJBTEo7Ozs7c0JBVU0sSUFBVjtxQ0FDV0wsS0FBWCxFQUFrQk8sSUFBbEIsQ0FBdUIsZ0JBQVE7eUJBQ2xCRixJQUFUO3dCQUNRQSxJQUFSO21CQUNHRyxJQUFILENBQVFaLElBQVIsRUFBYyxFQUFFUyxVQUFGLEVBQWQ7YUFISixFQUlHSSxLQUpILENBSVMsZUFBTzswQkFDRixLQUFWO3VCQUNPLEVBQUVILFFBQUYsRUFBUDttQkFDR0UsSUFBSCxDQUFRWixJQUFSLEVBQWMsRUFBRVUsUUFBRixFQUFkO2FBUEo7U0FsQmlCLENBQWQ7S0FBUDs7Ozs7In0=
