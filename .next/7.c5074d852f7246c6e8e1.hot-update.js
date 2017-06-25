webpackHotUpdate(7,{

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _withData = __webpack_require__(660);

var _withData2 = _interopRequireDefault(_withData);

var _App = __webpack_require__(652);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/claylyons/Developer/with-apollo-and-redux/pages/chores.js?entry';
// import Tasks from '../components/TaskList'


var Players = function Players() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('img', { src: 'assets/bret.jpg', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('img', { src: 'assets/brendan.jpg', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('img', { src: 'assets/clay.jpg', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
};

var Tasks = function Tasks(tasks) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Tasks');
};

var AddTask = function AddTask() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'Add');
};

exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(Players, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement(Tasks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement(AddTask, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/claylyons/Developer/with-apollo-and-redux/pages/chores.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/claylyons/Developer/with-apollo-and-redux/pages/chores.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/chores")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5jNTA3NGQ4NTJmNzI0NmM2ZThlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2hvcmVzLmpzPzRkMzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFRhc2tzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFza0xpc3QnXG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vbGliL3dpdGhEYXRhJ1xuaW1wb3J0IEFwcCBmcm9tICcuLi9jb21wb25lbnRzL0FwcCdcblxuY29uc3QgUGxheWVycyA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8aW1nIHNyYz1cImFzc2V0cy9icmV0LmpwZ1wiIC8+XG4gICAgPGltZyBzcmM9XCJhc3NldHMvYnJlbmRhbi5qcGdcIiAvPlxuICAgIDxpbWcgc3JjPVwiYXNzZXRzL2NsYXkuanBnXCIgLz5cbiAgPC9kaXY+XG4pXG5cbmNvbnN0IFRhc2tzID0gKHRhc2tzKSA9PiAoXG4gIDxkaXY+VGFza3M8L2Rpdj5cbilcblxuY29uc3QgQWRkVGFzayA9ICgpID0+IChcbiAgPGRpdj5BZGQ8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoKHByb3BzKSA9PiAoXG4gIDxBcHA+XG4gICAgPFBsYXllcnMgLz5cbiAgICA8VGFza3MvPlxuICAgIDxBZGRUYXNrLz5cbiAgPC9BcHA+XG4pKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2hvcmVzLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSkE7QUFDQTtBQU9BO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==