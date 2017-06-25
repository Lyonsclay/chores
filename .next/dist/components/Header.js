'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/claylyons/Developer/with-apollo-and-redux/components/Header.js';

exports.default = function (_ref) {
  var pathname = _ref.pathname;
  return _react2.default.createElement('header', {
    'data-jsx': 2815656255,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('a', { className: pathname === '/' && 'is-active', 'data-jsx': 2815656255,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', { className: pathname === '/about' && 'is-active', 'data-jsx': 2815656255,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'About')), _react2.default.createElement(_style2.default, {
    styleId: 2815656255,
    css: 'header[data-jsx="2815656255"]{margin-bottom:25px}a[data-jsx="2815656255"]{font-size:14px;margin-right:15px;-webkit-text-decoration:none;text-decoration:none}.is-active[data-jsx="2815656255"]{-webkit-text-decoration:underline;text-decoration:underline}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUc0QixBQUNKLEFBQ1csZ0JBRGdCLElBRGhCLGVBQzhDLDJCQUN2Qyx5QkFEOEMiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NsYXlseW9ucy9EZXZlbG9wZXIvd2l0aC1hcG9sbG8tYW5kLXJlZHV4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBwYXRobmFtZSB9KSA9PiAoXG4gIDxoZWFkZXI+XG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nLyc+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnLycgJiYgJ2lzLWFjdGl2ZSd9PkhvbWU8L2E+XG4gICAgPC9MaW5rPlxuXG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2Fib3V0Jz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvYWJvdXQnICYmICdpcy1hY3RpdmUnfT5BYm91dDwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAuaXMtYWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuIl19 */\n/*@ sourceURL=components/Header.js */'
  }));
};