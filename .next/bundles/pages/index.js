
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(652);

var _App2 = _interopRequireDefault(_App);

var _Header = __webpack_require__(653);

var _Header2 = _interopRequireDefault(_Header);

var _Submit = __webpack_require__(656);

var _Submit2 = _interopRequireDefault(_Submit);

var _PostList = __webpack_require__(654);

var _PostList2 = _interopRequireDefault(_PostList);

var _withData = __webpack_require__(660);

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/claylyons/Developer/with-apollo-and-redux/pages/index.js?entry';
exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_Header2.default, { pathname: props.url.pathname, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement(_Submit2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_PostList2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/claylyons/Developer/with-apollo-and-redux/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/claylyons/Developer/with-apollo-and-redux/pages/index.js"); } } })();
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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(553);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/claylyons/Developer/with-apollo-and-redux/components/App.js";

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("main", {
    "data-jsx": 412430643,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, children, _react2.default.createElement(_style2.default, {
    styleId: 412430643,
    css: "*{font-family:Menlo, Monaco, \"Lucida Console\", \"Liberation Mono\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Courier New\", monospace, serif}body{margin:0;padding:25px 50px}a{color:#22BAD9}p{font-size:14px;line-height:24px}article{margin:0 auto;max-width:650px}button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22BAD9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px}button:active{background-color:#1B9DB7;-webkit-transition:background-color .3s;transition:background-color .3s}button:focus{outline:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixBQUd5SixBQUN2SSxBQUNLLEFBQ0MsQUFDRCxBQUNLLEFBQ00sQUFFWixVQVB1QixJQU9oQixDQU5DLEFBRWtCLENBREUsVUFJakQsR0FObUQsR0FHRyxFQURFLCtEQUVLLEdBRXZELHVCQUZ5RSxVQUFxQixZQUwyRCxDQUtyQyw4RUFBeUIsaUJBQU8iLCJmaWxlIjoiY29tcG9uZW50cy9BcHAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NsYXlseW9ucy9EZXZlbG9wZXIvd2l0aC1hcG9sbG8tYW5kLXJlZHV4Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8bWFpbj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgXCJMdWNpZGEgQ29uc29sZVwiLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkRlamFWdSBTYW5zIE1vbm9cIiwgXCJCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UsIHNlcmlmO1xuICAgICAgfVxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMjVweCA1MHB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMjJCQUQ5O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgICBhcnRpY2xlIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJCQUQ5O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogNXB4IDdweDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI5REI3O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zc1xuICAgICAgfVxuICAgICAgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbWFpbj5cbilcbiJdfQ== */\n/*@ sourceURL=components/App.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/claylyons/Developer/with-apollo-and-redux/components/App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/claylyons/Developer/with-apollo-and-redux/components/App.js"); } } })();

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(553);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(651);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/claylyons/Developer/with-apollo-and-redux/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/claylyons/Developer/with-apollo-and-redux/components/Header.js"); } } })();

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(93);

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = __webpack_require__(566);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = __webpack_require__(553);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(552);

var _PostUpvoter = __webpack_require__(655);

var _PostUpvoter2 = _interopRequireDefault(_PostUpvoter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/claylyons/Developer/with-apollo-and-redux/components/PostList.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n      createdAt\n    },\n    _allPostsMeta {\n      count\n    }\n  }\n'], ['\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n      createdAt\n    },\n    _allPostsMeta {\n      count\n    }\n  }\n']);

var POSTS_PER_PAGE = 10;

function PostList(_ref) {
  var _ref$data = _ref.data,
      allPosts = _ref$data.allPosts,
      loading = _ref$data.loading,
      _allPostsMeta = _ref$data._allPostsMeta,
      loadMorePosts = _ref.loadMorePosts;

  if (allPosts && allPosts.length) {
    var areMorePosts = allPosts.length < _allPostsMeta.count;
    return _react2.default.createElement('section', {
      'data-jsx': 1990168462,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, _react2.default.createElement('ul', {
      'data-jsx': 1990168462,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, allPosts.map(function (post, index) {
      return _react2.default.createElement('li', { key: post.id, 'data-jsx': 1990168462,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement('div', {
        'data-jsx': 1990168462,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('span', {
        'data-jsx': 1990168462,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, index + 1, '. '), _react2.default.createElement('a', { href: post.url, 'data-jsx': 1990168462,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, post.title), _react2.default.createElement(_PostUpvoter2.default, { id: post.id, votes: post.votes, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })));
    })), areMorePosts ? _react2.default.createElement('button', { onClick: function onClick() {
        return loadMorePosts();
      }, 'data-jsx': 1990168462,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '', _react2.default.createElement(_style2.default, {
      styleId: 1990168462,
      css: 'section[data-jsx="1990168462"]{padding-bottom:20px}li[data-jsx="1990168462"]{display:block;margin-bottom:10px}div[data-jsx="1990168462"]{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}a[data-jsx="1990168462"]{font-size:14px;margin-right:10px;-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0}span[data-jsx="1990168462"]{font-size:14px;margin-right:5px}ul[data-jsx="1990168462"]{margin:0;padding:0}button[data-jsx="1990168462"]:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:"";height:0;margin-right:5px;width:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JvQixBQUdpQyxBQUNOLEFBQ0ssQUFDSixBQUNBLEFBQ04sQUFDUyxVQURjLEtBSmMsQ0FFQSxBQUNELEtBSmQsQUFLWSxhQURhLENBSEMsQUFFdUIsdUNBRzlCLGFBSDRELE9BR3BCLEdBSjdDLFFBQ3VGLFVBQVcsT0FHaUIscURBSnhHLEtBSWdJLFlBQXNCLFVBQThCLGtCQUFxQixTQUFXIiwiZmlsZSI6ImNvbXBvbmVudHMvUG9zdExpc3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NsYXlseW9ucy9EZXZlbG9wZXIvd2l0aC1hcG9sbG8tYW5kLXJlZHV4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IFBvc3RVcHZvdGVyIGZyb20gJy4vUG9zdFVwdm90ZXInXG5cbmNvbnN0IFBPU1RTX1BFUl9QQUdFID0gMTBcblxuZnVuY3Rpb24gUG9zdExpc3QgKHsgZGF0YTogeyBhbGxQb3N0cywgbG9hZGluZywgX2FsbFBvc3RzTWV0YSB9LCBsb2FkTW9yZVBvc3RzIH0pIHtcbiAgaWYgKGFsbFBvc3RzICYmIGFsbFBvc3RzLmxlbmd0aCkge1xuICAgIGNvbnN0IGFyZU1vcmVQb3N0cyA9IGFsbFBvc3RzLmxlbmd0aCA8IF9hbGxQb3N0c01ldGEuY291bnRcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7YWxsUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPntpbmRleCArIDF9LiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC51cmx9Pntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8UG9zdFVwdm90ZXIgaWQ9e3Bvc3QuaWR9IHZvdGVzPXtwb3N0LnZvdGVzfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAge2FyZU1vcmVQb3N0cyA/IDxidXR0b24gb25DbGljaz17KCkgPT4gbG9hZE1vcmVQb3N0cygpfT4ge2xvYWRpbmcgPyAnTG9hZGluZy4uLicgOiAnU2hvdyBNb3JlJ30gPC9idXR0b24+IDogJyd9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA2cHggNHB4IDAgNHB4O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbn1cblxuY29uc3QgYWxsUG9zdHMgPSBncWxgXG4gIHF1ZXJ5IGFsbFBvc3RzKCRmaXJzdDogSW50ISwgJHNraXA6IEludCEpIHtcbiAgICBhbGxQb3N0cyhvcmRlckJ5OiBjcmVhdGVkQXRfREVTQywgZmlyc3Q6ICRmaXJzdCwgc2tpcDogJHNraXApIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgdm90ZXNcbiAgICAgIHVybFxuICAgICAgY3JlYXRlZEF0XG4gICAgfSxcbiAgICBfYWxsUG9zdHNNZXRhIHtcbiAgICAgIGNvdW50XG4gICAgfVxuICB9XG5gXG5cbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoUG9zdExpc3QpXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGFsbFBvc3RzLCB7XG4gIG9wdGlvbnM6IHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHNraXA6IDAsXG4gICAgICBmaXJzdDogUE9TVFNfUEVSX1BBR0VcbiAgICB9XG4gIH0sXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7XG4gICAgZGF0YSxcbiAgICBsb2FkTW9yZVBvc3RzOiAoKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YS5mZXRjaE1vcmUoe1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBza2lwOiBkYXRhLmFsbFBvc3RzLmxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVRdWVyeTogKHByZXZpb3VzUmVzdWx0LCB7IGZldGNoTW9yZVJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1Jlc3VsdFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RzIHJlc3VsdHMgdG8gdGhlIG9sZCBvbmVcbiAgICAgICAgICAgIGFsbFBvc3RzOiBbLi4ucHJldmlvdXNSZXN1bHQuYWxsUG9zdHMsIC4uLmZldGNoTW9yZVJlc3VsdC5hbGxQb3N0c11cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn0pKFBvc3RMaXN0KVxuIl19 */\n/*@ sourceURL=components/PostList.js */'
    }));
  }
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, 'Loading');
}

var allPosts = (0, _reactApollo.gql)(_templateObject);

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
exports.default = (0, _reactApollo.graphql)(allPosts, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE
    }
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data,
      loadMorePosts: function loadMorePosts() {
        return data.fetchMore({
          variables: {
            skip: data.allPosts.length
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }
            return (0, _assign2.default)({}, previousResult, {
              // Append the new posts results to the old one
              allPosts: [].concat((0, _toConsumableArray3.default)(previousResult.allPosts), (0, _toConsumableArray3.default)(fetchMoreResult.allPosts))
            });
          }
        });
      }
    };
  }
})(PostList);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/claylyons/Developer/with-apollo-and-redux/components/PostList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/claylyons/Developer/with-apollo-and-redux/components/PostList.js"); } } })();

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(566);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = __webpack_require__(553);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(552);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/claylyons/Developer/with-apollo-and-redux/components/PostUpvoter.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      __typename\n      votes\n    }\n  }\n'], ['\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      __typename\n      votes\n    }\n  }\n']);

function PostUpvoter(_ref) {
  var upvote = _ref.upvote,
      votes = _ref.votes,
      id = _ref.id;

  return _react2.default.createElement('button', { onClick: function onClick() {
      return upvote(id, votes + 1);
    }, 'data-jsx': 2734071884,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, votes, _react2.default.createElement(_style2.default, {
    styleId: 2734071884,
    css: 'button[data-jsx="2734071884"]{background-color:transparent;border:1px solid #e4e4e4;color:#000}button[data-jsx="2734071884"]:active{background-color:transparent}button[data-jsx="2734071884"]:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-color:transparent transparent #000000 transparent;border-style:solid;border-width:0 4px 6px 4px;content:"";height:0;margin-right:5px;width:0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT2tCLEFBR3dDLEFBQ0EsQUFDWCw4QkFGK0MsQUFDM0IsMEJBRGlELFlBQVMsTUFFViwwREFBOEIsb0JBQXNDLDRCQUFzQixZQUFvQixVQUE0QixrQkFBbUIsU0FBUyIsImZpbGUiOiJjb21wb25lbnRzL1Bvc3RVcHZvdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jbGF5bHlvbnMvRGV2ZWxvcGVyL3dpdGgtYXBvbGxvLWFuZC1yZWR1eCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdxbCwgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcblxuZnVuY3Rpb24gUG9zdFVwdm90ZXIgKHsgdXB2b3RlLCB2b3RlcywgaWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXB2b3RlKGlkLCB2b3RlcyArIDEpfT5cbiAgICAgIHt2b3Rlc31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMwMDAwMDAgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDAgNHB4IDZweCA0cHg7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5jb25zdCB1cHZvdGVQb3N0ID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVQb3N0KCRpZDogSUQhLCAkdm90ZXM6IEludCkge1xuICAgIHVwZGF0ZVBvc3QoaWQ6ICRpZCwgdm90ZXM6ICR2b3Rlcykge1xuICAgICAgaWRcbiAgICAgIF9fdHlwZW5hbWVcbiAgICAgIHZvdGVzXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwodXB2b3RlUG9zdCwge1xuICBwcm9wczogKHsgb3duUHJvcHMsIG11dGF0ZSB9KSA9PiAoe1xuICAgIHVwdm90ZTogKGlkLCB2b3RlcykgPT4gbXV0YXRlKHtcbiAgICAgIHZhcmlhYmxlczogeyBpZCwgdm90ZXMgfSxcbiAgICAgIG9wdGltaXN0aWNSZXNwb25zZToge1xuICAgICAgICBfX3R5cGVuYW1lOiAnTXV0YXRpb24nLFxuICAgICAgICB1cGRhdGVQb3N0OiB7XG4gICAgICAgICAgX190eXBlbmFtZTogJ1Bvc3QnLFxuICAgICAgICAgIGlkOiBvd25Qcm9wcy5pZCxcbiAgICAgICAgICB2b3Rlczogb3duUHJvcHMudm90ZXMgKyAxXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSkoUG9zdFVwdm90ZXIpXG4iXX0= */\n/*@ sourceURL=components/PostUpvoter.js */'
  }));
}

var upvotePost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(upvotePost, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      upvote: function upvote(id, votes) {
        return mutate({
          variables: { id: id, votes: votes },
          optimisticResponse: {
            __typename: 'Mutation',
            updatePost: {
              __typename: 'Post',
              id: ownProps.id,
              votes: ownProps.votes + 1
            }
          }
        });
      }
    };
  }
})(PostUpvoter);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/claylyons/Developer/with-apollo-and-redux/components/PostUpvoter.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/claylyons/Developer/with-apollo-and-redux/components/PostUpvoter.js"); } } })();

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(93);

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = __webpack_require__(566);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = __webpack_require__(553);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(552);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/claylyons/Developer/with-apollo-and-redux/components/Submit.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n'], ['\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n']);

function Submit(_ref) {
  var createPost = _ref.createPost;

  function handleSubmit(e) {
    e.preventDefault();

    var title = e.target.elements.title.value;
    var url = e.target.elements.url.value;

    if (title === '') {
      window.alert('Both fields are required.');
      return false;
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = 'http://' + url;
    }

    createPost(title, url);

    // reset form
    e.target.elements.title.value = '';
    e.target.elements.url.value = '';
  }

  return _react2.default.createElement('form', { onSubmit: handleSubmit, 'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('h1', {
    'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Submit'), _react2.default.createElement('input', { placeholder: 'title', name: 'title', 'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement('input', { placeholder: 'url', name: 'url', 'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement('button', { type: 'submit', 'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, 'Submit'), _react2.default.createElement(_style2.default, {
    styleId: 567193191,
    css: 'form[data-jsx="567193191"]{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px}h1[data-jsx="567193191"]{font-size:20px}input[data-jsx="567193191"]{display:block;margin-bottom:10px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3VibWl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDa0IsQUFHMkMsQUFDakIsQUFDRCxlQUE4QixDQURwQixpQkFEdUMsRUFFVixtQkFGd0Msb0JBQVMiLCJmaWxlIjoiY29tcG9uZW50cy9TdWJtaXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NsYXlseW9ucy9EZXZlbG9wZXIvd2l0aC1hcG9sbG8tYW5kLXJlZHV4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5mdW5jdGlvbiBTdWJtaXQgKHsgY3JlYXRlUG9zdCB9KSB7XG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgbGV0IHRpdGxlID0gZS50YXJnZXQuZWxlbWVudHMudGl0bGUudmFsdWVcbiAgICBsZXQgdXJsID0gZS50YXJnZXQuZWxlbWVudHMudXJsLnZhbHVlXG5cbiAgICBpZiAodGl0bGUgPT09ICcnKSB7XG4gICAgICB3aW5kb3cuYWxlcnQoJ0JvdGggZmllbGRzIGFyZSByZXF1aXJlZC4nKVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gcHJlcGVuZCBodHRwIGlmIG1pc3NpbmcgZnJvbSB1cmxcbiAgICBpZiAoIXVybC5tYXRjaCgvXlthLXpBLVpdKzpcXC9cXC8vKSkge1xuICAgICAgdXJsID0gYGh0dHA6Ly8ke3VybH1gXG4gICAgfVxuXG4gICAgY3JlYXRlUG9zdCh0aXRsZSwgdXJsKVxuXG4gICAgLy8gcmVzZXQgZm9ybVxuICAgIGUudGFyZ2V0LmVsZW1lbnRzLnRpdGxlLnZhbHVlID0gJydcbiAgICBlLnRhcmdldC5lbGVtZW50cy51cmwudmFsdWUgPSAnJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxoMT5TdWJtaXQ8L2gxPlxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSd0aXRsZScgbmFtZT0ndGl0bGUnIC8+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J3VybCcgbmFtZT0ndXJsJyAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuY29uc3QgY3JlYXRlUG9zdCA9IGdxbGBcbiAgbXV0YXRpb24gY3JlYXRlUG9zdCgkdGl0bGU6IFN0cmluZyEsICR1cmw6IFN0cmluZyEpIHtcbiAgICBjcmVhdGVQb3N0KHRpdGxlOiAkdGl0bGUsIHVybDogJHVybCkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICBjcmVhdGVkQXRcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChjcmVhdGVQb3N0LCB7XG4gIHByb3BzOiAoeyBtdXRhdGUgfSkgPT4gKHtcbiAgICBjcmVhdGVQb3N0OiAodGl0bGUsIHVybCkgPT4gbXV0YXRlKHtcbiAgICAgIHZhcmlhYmxlczogeyB0aXRsZSwgdXJsIH0sXG4gICAgICB1cGRhdGVRdWVyaWVzOiB7XG4gICAgICAgIGFsbFBvc3RzOiAocHJldmlvdXNSZXN1bHQsIHsgbXV0YXRpb25SZXN1bHQgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBtdXRhdGlvblJlc3VsdC5kYXRhLmNyZWF0ZVBvc3RcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RcbiAgICAgICAgICAgIGFsbFBvc3RzOiBbbmV3UG9zdCwgLi4ucHJldmlvdXNSZXN1bHQuYWxsUG9zdHNdXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KShTdWJtaXQpXG4iXX0= */\n/*@ sourceURL=components/Submit.js */'
  }));
}

var createPost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(createPost, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createPost: function createPost(title, url) {
        return mutate({
          variables: { title: title, url: url },
          updateQueries: {
            allPosts: function allPosts(previousResult, _ref3) {
              var mutationResult = _ref3.mutationResult;

              var newPost = mutationResult.data.createPost;
              return (0, _assign2.default)({}, previousResult, {
                // Append the new post
                allPosts: [newPost].concat((0, _toConsumableArray3.default)(previousResult.allPosts))
              });
            }
          }
        });
      }
    };
  }
})(Submit);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/claylyons/Developer/with-apollo-and-redux/components/Submit.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/claylyons/Developer/with-apollo-and-redux/components/Submit.js"); } } })();

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initApollo;

var _reactApollo = __webpack_require__(552);

var _isomorphicFetch = __webpack_require__(641);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = _isomorphicFetch2.default;
}

function create() {
  return new _reactApollo.ApolloClient({
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: (0, _reactApollo.createNetworkInterface)({
      uri: 'https://api.graph.cool/simple/v1/cj3ksckguee5p01616fiw2m4q',
      opts: { // Additional fetch() options like `credentials` or `headers`
        credentials: 'same-origin'
      }
    })
  });
}

function initApollo() {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create();
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create();
  }

  return apolloClient;
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/claylyons/Developer/with-apollo-and-redux/lib/initApollo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/claylyons/Developer/with-apollo-and-redux/lib/initApollo.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57), __webpack_require__(36)))

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initRedux;

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _redux = __webpack_require__(573);

var _reducers = __webpack_require__(659);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reduxStore = null;

// Get the Redux DevTools extension and fallback to a no-op function
var devtools = function devtools(f) {
  return f;
};
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

function create(apollo) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _redux.createStore)((0, _redux.combineReducers)((0, _extends3.default)({}, _reducers2.default, {
    apollo: apollo.reducer()
  })), initialState, // Hydrate the store with server-side data
  (0, _redux.compose)((0, _redux.applyMiddleware)(apollo.middleware()), // Add additional middleware here
  devtools));
}

function initRedux(apollo, initialState) {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(apollo, initialState);
  }

  // Reuse store on the client-side
  if (!reduxStore) {
    reduxStore = create(apollo, initialState);
  }

  return reduxStore;
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/claylyons/Developer/with-apollo-and-redux/lib/initRedux.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/claylyons/Developer/with-apollo-and-redux/lib/initRedux.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)))

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  example: function example() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _ref = arguments[1];
    var type = _ref.type,
        payload = _ref.payload;

    switch (type) {
      case 'EXAMPLE_ACTION':
        return (0, _extends3.default)({}, state);
      default:
        return state;
    }
  }
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/claylyons/Developer/with-apollo-and-redux/lib/reducers.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/claylyons/Developer/with-apollo-and-redux/lib/reducers.js"); } } })();

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(84);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(552);

var _initApollo = __webpack_require__(657);

var _initApollo2 = _interopRequireDefault(_initApollo);

var _initRedux = __webpack_require__(658);

var _initRedux2 = _interopRequireDefault(_initRedux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/claylyons/Developer/with-apollo-and-redux/lib/withData.js';

exports.default = function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    (0, _inherits3.default)(WithData, _React$Component);

    (0, _createClass3.default)(WithData, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo, redux, url, app, state;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  serverState = {};

                  // Evaluate the composed component's getInitialProps()

                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:
                  if (process.browser) {
                    _context.next = 15;
                    break;
                  }

                  apollo = (0, _initApollo2.default)();
                  redux = (0, _initRedux2.default)(apollo);
                  // Provide the `url` prop data in case a graphql query uses it

                  url = { query: ctx.query, pathname: ctx.pathname

                    // Run all graphql queries
                  };
                  app =
                  // No need to use the Redux Provider
                  // because Apollo sets up the store for us
                  _react2.default.createElement(_reactApollo.ApolloProvider, { client: apollo, store: redux, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    }
                  }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({ url: url }, composedInitialProps, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 36
                    }
                  })));
                  _context.next = 13;
                  return (0, _reactApollo.getDataFromTree)(app);

                case 13:

                  // Extract query data from the store
                  state = redux.getState();

                  // No need to include other initial Redux state because when it
                  // initialises on the client-side it'll create it again anyway

                  serverState = {
                    apollo: { // Make sure to only include Apollo's data state
                      data: state.apollo.data
                    }
                  };

                case 15:
                  return _context.abrupt('return', (0, _extends3.default)({
                    serverState: serverState
                  }, composedInitialProps));

                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithData(props) {
      (0, _classCallCheck3.default)(this, WithData);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WithData.__proto__ || (0, _getPrototypeOf2.default)(WithData)).call(this, props));

      _this.apollo = (0, _initApollo2.default)();
      _this.redux = (0, _initRedux2.default)(_this.apollo, _this.props.serverState);
      return _this;
    }

    (0, _createClass3.default)(WithData, [{
      key: 'render',
      value: function render() {
        return (
          // No need to use the Redux Provider
          // because Apollo sets up the store for us
          _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.apollo, store: this.redux, __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          })))
        );
      }
    }]);

    return WithData;
  }(_react2.default.Component), _class.displayName = 'WithData(' + ComposedComponent.displayName + ')', _class.propTypes = {
    serverState: _propTypes2.default.object.isRequired
  }, _temp;
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/claylyons/Developer/with-apollo-and-redux/lib/withData.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/claylyons/Developer/with-apollo-and-redux/lib/withData.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)))

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(597);


/***/ })

},[666]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzVkYWRmMzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcHAuanM/NWRhZGYzNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz81ZGFkZjM0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdExpc3QuanM/NWRhZGYzNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3RVcHZvdGVyLmpzPzVkYWRmMzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdWJtaXQuanM/NWRhZGYzNCIsIndlYnBhY2s6Ly8vLi9saWIvaW5pdEFwb2xsby5qcz81ZGFkZjM0Iiwid2VicGFjazovLy8uL2xpYi9pbml0UmVkdXguanM/NWRhZGYzNCIsIndlYnBhY2s6Ly8vLi9saWIvcmVkdWNlcnMuanM/NWRhZGYzNCIsIndlYnBhY2s6Ly8vLi9saWIvd2l0aERhdGEuanM/NWRhZGYzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBTdWJtaXQgZnJvbSAnLi4vY29tcG9uZW50cy9TdWJtaXQnXG5pbXBvcnQgUG9zdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0TGlzdCdcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9saWIvd2l0aERhdGEnXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKChwcm9wcykgPT4gKFxuICA8QXBwPlxuICAgIDxIZWFkZXIgcGF0aG5hbWU9e3Byb3BzLnVybC5wYXRobmFtZX0gLz5cbiAgICA8U3VibWl0IC8+XG4gICAgPFBvc3RMaXN0IC8+XG4gIDwvQXBwPlxuKSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8bWFpbj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgXCJMdWNpZGEgQ29uc29sZVwiLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkRlamFWdSBTYW5zIE1vbm9cIiwgXCJCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UsIHNlcmlmO1xuICAgICAgfVxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMjVweCA1MHB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMjJCQUQ5O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgICBhcnRpY2xlIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJCQUQ5O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogNXB4IDdweDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUI5REI3O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zc1xuICAgICAgfVxuICAgICAgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbWFpbj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBwLmpzIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBwYXRobmFtZSB9KSA9PiAoXG4gIDxoZWFkZXI+XG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nLyc+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnLycgJiYgJ2lzLWFjdGl2ZSd9PkhvbWU8L2E+XG4gICAgPC9MaW5rPlxuXG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2Fib3V0Jz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvYWJvdXQnICYmICdpcy1hY3RpdmUnfT5BYm91dDwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAuaXMtYWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgeyBncWwsIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgUG9zdFVwdm90ZXIgZnJvbSAnLi9Qb3N0VXB2b3RlcidcblxuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAxMFxuXG5mdW5jdGlvbiBQb3N0TGlzdCAoeyBkYXRhOiB7IGFsbFBvc3RzLCBsb2FkaW5nLCBfYWxsUG9zdHNNZXRhIH0sIGxvYWRNb3JlUG9zdHMgfSkge1xuICBpZiAoYWxsUG9zdHMgJiYgYWxsUG9zdHMubGVuZ3RoKSB7XG4gICAgY29uc3QgYXJlTW9yZVBvc3RzID0gYWxsUG9zdHMubGVuZ3RoIDwgX2FsbFBvc3RzTWV0YS5jb3VudFxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHthbGxQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PlxuICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2luZGV4ICsgMX0uIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LnVybH0+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDxQb3N0VXB2b3RlciBpZD17cG9zdC5pZH0gdm90ZXM9e3Bvc3Qudm90ZXN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7YXJlTW9yZVBvc3RzID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9yZVBvc3RzKCl9PiB7bG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTaG93IE1vcmUnfSA8L2J1dHRvbj4gOiAnJ31cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDZweCA0cHggMCA0cHg7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbiAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxufVxuXG5jb25zdCBhbGxQb3N0cyA9IGdxbGBcbiAgcXVlcnkgYWxsUG9zdHMoJGZpcnN0OiBJbnQhLCAkc2tpcDogSW50ISkge1xuICAgIGFsbFBvc3RzKG9yZGVyQnk6IGNyZWF0ZWRBdF9ERVNDLCBmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICB2b3Rlc1xuICAgICAgdXJsXG4gICAgICBjcmVhdGVkQXRcbiAgICB9LFxuICAgIF9hbGxQb3N0c01ldGEge1xuICAgICAgY291bnRcbiAgICB9XG4gIH1cbmBcblxuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChQb3N0TGlzdClcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoYWxsUG9zdHMsIHtcbiAgb3B0aW9uczoge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgc2tpcDogMCxcbiAgICAgIGZpcnN0OiBQT1NUU19QRVJfUEFHRVxuICAgIH1cbiAgfSxcbiAgcHJvcHM6ICh7IGRhdGEgfSkgPT4gKHtcbiAgICBkYXRhLFxuICAgIGxvYWRNb3JlUG9zdHM6ICgpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIHNraXA6IGRhdGEuYWxsUG9zdHMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBpZiAoIWZldGNoTW9yZVJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdHMgcmVzdWx0cyB0byB0aGUgb2xkIG9uZVxuICAgICAgICAgICAgYWxsUG9zdHM6IFsuLi5wcmV2aW91c1Jlc3VsdC5hbGxQb3N0cywgLi4uZmV0Y2hNb3JlUmVzdWx0LmFsbFBvc3RzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufSkoUG9zdExpc3QpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1Bvc3RMaXN0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuXG5mdW5jdGlvbiBQb3N0VXB2b3RlciAoeyB1cHZvdGUsIHZvdGVzLCBpZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB1cHZvdGUoaWQsIHZvdGVzICsgMSl9PlxuICAgICAge3ZvdGVzfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmJlZm9yZSB7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzAwMDAwMCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMCA0cHggNnB4IDRweDtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNvbnN0IHVwdm90ZVBvc3QgPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZVBvc3QoJGlkOiBJRCEsICR2b3RlczogSW50KSB7XG4gICAgdXBkYXRlUG9zdChpZDogJGlkLCB2b3RlczogJHZvdGVzKSB7XG4gICAgICBpZFxuICAgICAgX190eXBlbmFtZVxuICAgICAgdm90ZXNcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbCh1cHZvdGVQb3N0LCB7XG4gIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgdXB2b3RlOiAoaWQsIHZvdGVzKSA9PiBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7IGlkLCB2b3RlcyB9LFxuICAgICAgb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XG4gICAgICAgIF9fdHlwZW5hbWU6ICdNdXRhdGlvbicsXG4gICAgICAgIHVwZGF0ZVBvc3Q6IHtcbiAgICAgICAgICBfX3R5cGVuYW1lOiAnUG9zdCcsXG4gICAgICAgICAgaWQ6IG93blByb3BzLmlkLFxuICAgICAgICAgIHZvdGVzOiBvd25Qcm9wcy52b3RlcyArIDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KShQb3N0VXB2b3RlcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiLCJpbXBvcnQgeyBncWwsIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5cbmZ1bmN0aW9uIFN1Ym1pdCAoeyBjcmVhdGVQb3N0IH0pIHtcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0IChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5lbGVtZW50cy50aXRsZS52YWx1ZVxuICAgIGxldCB1cmwgPSBlLnRhcmdldC5lbGVtZW50cy51cmwudmFsdWVcblxuICAgIGlmICh0aXRsZSA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5hbGVydCgnQm90aCBmaWVsZHMgYXJlIHJlcXVpcmVkLicpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBwcmVwZW5kIGh0dHAgaWYgbWlzc2luZyBmcm9tIHVybFxuICAgIGlmICghdXJsLm1hdGNoKC9eW2EtekEtWl0rOlxcL1xcLy8pKSB7XG4gICAgICB1cmwgPSBgaHR0cDovLyR7dXJsfWBcbiAgICB9XG5cbiAgICBjcmVhdGVQb3N0KHRpdGxlLCB1cmwpXG5cbiAgICAvLyByZXNldCBmb3JtXG4gICAgZS50YXJnZXQuZWxlbWVudHMudGl0bGUudmFsdWUgPSAnJ1xuICAgIGUudGFyZ2V0LmVsZW1lbnRzLnVybC52YWx1ZSA9ICcnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGgxPlN1Ym1pdDwvaDE+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J3RpdGxlJyBuYW1lPSd0aXRsZScgLz5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0ndXJsJyBuYW1lPSd1cmwnIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9idXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBjcmVhdGVQb3N0ID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVQb3N0KCR0aXRsZTogU3RyaW5nISwgJHVybDogU3RyaW5nISkge1xuICAgIGNyZWF0ZVBvc3QodGl0bGU6ICR0aXRsZSwgdXJsOiAkdXJsKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHZvdGVzXG4gICAgICB1cmxcbiAgICAgIGNyZWF0ZWRBdFxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGNyZWF0ZVBvc3QsIHtcbiAgcHJvcHM6ICh7IG11dGF0ZSB9KSA9PiAoe1xuICAgIGNyZWF0ZVBvc3Q6ICh0aXRsZSwgdXJsKSA9PiBtdXRhdGUoe1xuICAgICAgdmFyaWFibGVzOiB7IHRpdGxlLCB1cmwgfSxcbiAgICAgIHVwZGF0ZVF1ZXJpZXM6IHtcbiAgICAgICAgYWxsUG9zdHM6IChwcmV2aW91c1Jlc3VsdCwgeyBtdXRhdGlvblJlc3VsdCB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3UG9zdCA9IG11dGF0aW9uUmVzdWx0LmRhdGEuY3JlYXRlUG9zdFxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91c1Jlc3VsdCwge1xuICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdFxuICAgICAgICAgICAgYWxsUG9zdHM6IFtuZXdQb3N0LCAuLi5wcmV2aW91c1Jlc3VsdC5hbGxQb3N0c11cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pKFN1Ym1pdClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU3VibWl0LmpzIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBjcmVhdGVOZXR3b3JrSW50ZXJmYWNlIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXG5cbmxldCBhcG9sbG9DbGllbnQgPSBudWxsXG5cbi8vIFBvbHlmaWxsIGZldGNoKCkgb24gdGhlIHNlcnZlciAodXNlZCBieSBhcG9sbG8tY2xpZW50KVxuaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgZ2xvYmFsLmZldGNoID0gZmV0Y2hcbn1cblxuZnVuY3Rpb24gY3JlYXRlICgpIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6ICFwcm9jZXNzLmJyb3dzZXIsIC8vIERpc2FibGVzIGZvcmNlRmV0Y2ggb24gdGhlIHNlcnZlciAoc28gcXVlcmllcyBhcmUgb25seSBydW4gb25jZSlcbiAgICBuZXR3b3JrSW50ZXJmYWNlOiBjcmVhdGVOZXR3b3JrSW50ZXJmYWNlKHtcbiAgICAgIHVyaTogJ2h0dHBzOi8vYXBpLmdyYXBoLmNvb2wvc2ltcGxlL3YxL2NqM2tzY2tndWVlNXAwMTYxNmZpdzJtNHEnLFxuICAgICAgb3B0czogeyAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEFwb2xsbyAoKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgY2xpZW50IGZvciBldmVyeSBzZXJ2ZXItc2lkZSByZXF1ZXN0IHNvIHRoYXQgZGF0YVxuICAvLyBpc24ndCBzaGFyZWQgYmV0d2VlbiBjb25uZWN0aW9ucyAod2hpY2ggd291bGQgYmUgYmFkKVxuICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICAgIHJldHVybiBjcmVhdGUoKVxuICB9XG5cbiAgLy8gUmV1c2UgY2xpZW50IG9uIHRoZSBjbGllbnQtc2lkZVxuICBpZiAoIWFwb2xsb0NsaWVudCkge1xuICAgIGFwb2xsb0NsaWVudCA9IGNyZWF0ZSgpXG4gIH1cblxuICByZXR1cm4gYXBvbGxvQ2xpZW50XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5pdEFwb2xsby5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnXG5cbmxldCByZWR1eFN0b3JlID0gbnVsbFxuXG4vLyBHZXQgdGhlIFJlZHV4IERldlRvb2xzIGV4dGVuc2lvbiBhbmQgZmFsbGJhY2sgdG8gYSBuby1vcCBmdW5jdGlvblxubGV0IGRldnRvb2xzID0gZiA9PiBmXG5pZiAocHJvY2Vzcy5icm93c2VyICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKSB7XG4gIGRldnRvb2xzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKVxufVxuXG5mdW5jdGlvbiBjcmVhdGUgKGFwb2xsbywgaW5pdGlhbFN0YXRlID0ge30pIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIGNvbWJpbmVSZWR1Y2Vycyh7IC8vIFNldHVwIHJlZHVjZXJzXG4gICAgICAuLi5yZWR1Y2VycyxcbiAgICAgIGFwb2xsbzogYXBvbGxvLnJlZHVjZXIoKVxuICAgIH0pLFxuICAgIGluaXRpYWxTdGF0ZSwgLy8gSHlkcmF0ZSB0aGUgc3RvcmUgd2l0aCBzZXJ2ZXItc2lkZSBkYXRhXG4gICAgY29tcG9zZShcbiAgICAgIGFwcGx5TWlkZGxld2FyZShhcG9sbG8ubWlkZGxld2FyZSgpKSwgLy8gQWRkIGFkZGl0aW9uYWwgbWlkZGxld2FyZSBoZXJlXG4gICAgICBkZXZ0b29sc1xuICAgIClcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0UmVkdXggKGFwb2xsbywgaW5pdGlhbFN0YXRlKSB7XG4gIC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgc3RvcmUgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShhcG9sbG8sIGluaXRpYWxTdGF0ZSlcbiAgfVxuXG4gIC8vIFJldXNlIHN0b3JlIG9uIHRoZSBjbGllbnQtc2lkZVxuICBpZiAoIXJlZHV4U3RvcmUpIHtcbiAgICByZWR1eFN0b3JlID0gY3JlYXRlKGFwb2xsbywgaW5pdGlhbFN0YXRlKVxuICB9XG5cbiAgcmV0dXJuIHJlZHV4U3RvcmVcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pbml0UmVkdXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGV4YW1wbGU6IChzdGF0ZSA9IHt9LCB7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnRVhBTVBMRV9BQ1RJT04nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlXG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3JlZHVjZXJzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIsIGdldERhdGFGcm9tVHJlZSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBpbml0QXBvbGxvIGZyb20gJy4vaW5pdEFwb2xsbydcbmltcG9ydCBpbml0UmVkdXggZnJvbSAnLi9pbml0UmVkdXgnXG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvc2VkQ29tcG9uZW50ID0+IHtcbiAgcmV0dXJuIGNsYXNzIFdpdGhEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBgV2l0aERhdGEoJHtDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZX0pYFxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBzZXJ2ZXJTdGF0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoY3R4KSB7XG4gICAgICBsZXQgc2VydmVyU3RhdGUgPSB7fVxuXG4gICAgICAvLyBFdmFsdWF0ZSB0aGUgY29tcG9zZWQgY29tcG9uZW50J3MgZ2V0SW5pdGlhbFByb3BzKClcbiAgICAgIGxldCBjb21wb3NlZEluaXRpYWxQcm9wcyA9IHt9XG4gICAgICBpZiAoQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGNvbXBvc2VkSW5pdGlhbFByb3BzID0gYXdhaXQgQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcbiAgICAgIH1cblxuICAgICAgLy8gUnVuIGFsbCBncmFwaHFsIHF1ZXJpZXMgaW4gdGhlIGNvbXBvbmVudCB0cmVlXG4gICAgICAvLyBhbmQgZXh0cmFjdCB0aGUgcmVzdWx0aW5nIGRhdGFcbiAgICAgIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICAgIGNvbnN0IGFwb2xsbyA9IGluaXRBcG9sbG8oKVxuICAgICAgICBjb25zdCByZWR1eCA9IGluaXRSZWR1eChhcG9sbG8pXG4gICAgICAgIC8vIFByb3ZpZGUgdGhlIGB1cmxgIHByb3AgZGF0YSBpbiBjYXNlIGEgZ3JhcGhxbCBxdWVyeSB1c2VzIGl0XG4gICAgICAgIGNvbnN0IHVybCA9IHtxdWVyeTogY3R4LnF1ZXJ5LCBwYXRobmFtZTogY3R4LnBhdGhuYW1lfVxuXG4gICAgICAgIC8vIFJ1biBhbGwgZ3JhcGhxbCBxdWVyaWVzXG4gICAgICAgIGNvbnN0IGFwcCA9IChcbiAgICAgICAgICAvLyBObyBuZWVkIHRvIHVzZSB0aGUgUmVkdXggUHJvdmlkZXJcbiAgICAgICAgICAvLyBiZWNhdXNlIEFwb2xsbyBzZXRzIHVwIHRoZSBzdG9yZSBmb3IgdXNcbiAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG99IHN0b3JlPXtyZWR1eH0+XG4gICAgICAgICAgICA8Q29tcG9zZWRDb21wb25lbnQgdXJsPXt1cmx9IHsuLi5jb21wb3NlZEluaXRpYWxQcm9wc30gLz5cbiAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgICApXG4gICAgICAgIGF3YWl0IGdldERhdGFGcm9tVHJlZShhcHApXG5cbiAgICAgICAgLy8gRXh0cmFjdCBxdWVyeSBkYXRhIGZyb20gdGhlIHN0b3JlXG4gICAgICAgIGNvbnN0IHN0YXRlID0gcmVkdXguZ2V0U3RhdGUoKVxuXG4gICAgICAgIC8vIE5vIG5lZWQgdG8gaW5jbHVkZSBvdGhlciBpbml0aWFsIFJlZHV4IHN0YXRlIGJlY2F1c2Ugd2hlbiBpdFxuICAgICAgICAvLyBpbml0aWFsaXNlcyBvbiB0aGUgY2xpZW50LXNpZGUgaXQnbGwgY3JlYXRlIGl0IGFnYWluIGFueXdheVxuICAgICAgICBzZXJ2ZXJTdGF0ZSA9IHtcbiAgICAgICAgICBhcG9sbG86IHsgLy8gTWFrZSBzdXJlIHRvIG9ubHkgaW5jbHVkZSBBcG9sbG8ncyBkYXRhIHN0YXRlXG4gICAgICAgICAgICBkYXRhOiBzdGF0ZS5hcG9sbG8uZGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZXJ2ZXJTdGF0ZSxcbiAgICAgICAgLi4uY29tcG9zZWRJbml0aWFsUHJvcHNcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgdGhpcy5hcG9sbG8gPSBpbml0QXBvbGxvKClcbiAgICAgIHRoaXMucmVkdXggPSBpbml0UmVkdXgodGhpcy5hcG9sbG8sIHRoaXMucHJvcHMuc2VydmVyU3RhdGUpXG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8vIE5vIG5lZWQgdG8gdXNlIHRoZSBSZWR1eCBQcm92aWRlclxuICAgICAgICAvLyBiZWNhdXNlIEFwb2xsbyBzZXRzIHVwIHRoZSBzdG9yZSBmb3IgdXNcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17dGhpcy5hcG9sbG99IHN0b3JlPXt0aGlzLnJlZHV4fT5cbiAgICAgICAgICA8Q29tcG9zZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvd2l0aERhdGEuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBOzs7Ozs7O0FBREE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQUFBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUtBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpBO0FBcURBO0FBckRBO0FBc0RBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUdBO0FBQ0E7QUFjQTtBQUVBO0FBQUE7OztBQUlBO0FBR0E7QUFKQTtBQURBO0FBS0E7QUFBQTs7QUFFQTtBQUFBO0FBQ0E7O0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQURBO0FBS0E7QUFiQTtBQUpBO0FBQ0E7QUFSQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUF3QkE7QUF4QkE7OztBQTBCQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBRUE7QUFBQTtBQUNBO0FBRkE7QUFGQTtBQUZBO0FBRkE7QUFDQTtBQUZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFxQkE7QUFyQkE7OztBQXVCQTtBQUNBO0FBV0E7QUFDQTtBQUFBOztBQUNBOztBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFKQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBOztBQUVBOztBQUdBO0FBQ0E7QUFJQTtBQUxBO0FBREE7QUFGQTtBQVVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBSUE7QUFJQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7O0FBVkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQURBO0FBQUE7QUFNQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQVhBO0FBQ0E7QUFVQTtBQVhBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFZQTtBQUNBO0FBREE7QUFaQTtBQUNBO0FBREE7QUFpQkE7QUFqQkE7QUFBQTtBQWtCQTtBQUNBO0FBbkJBO0FBQUE7QUFxQkE7QUFDQTtBQXRCQTtBQUNBO0FBdUJBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNUJBO0FBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFsQ0E7QUFDQTtBQW9DQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQURBO0FBQUE7QUFDQTtBQXhDQTs7QUFBQTtBQThDQTtBQUNBO0FBL0NBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFtREE7QUFuREE7QUFDQTtBQWtEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBdkRBO0FBQ0E7O0FBREE7QUEwREE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBR0E7QUFIQTtBQUFBOztBQTlEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        