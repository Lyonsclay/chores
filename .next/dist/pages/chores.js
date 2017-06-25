'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _App = require('../components/App');

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