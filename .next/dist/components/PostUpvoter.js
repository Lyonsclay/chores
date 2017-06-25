'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

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