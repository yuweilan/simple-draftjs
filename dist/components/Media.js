'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Audio = function Audio(props) {
  return _react2.default.createElement('audio', { controls: true, src: props.src });
};

var Image = function Image(props) {
  return _react2.default.createElement('img', { src: props.src });
};

var Video = function Video(props) {
  return _react2.default.createElement('video', { controls: true, src: props.src });
};

var Media = function (_Component) {
  _inherits(Media, _Component);

  function Media() {
    _classCallCheck(this, Media);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Media).apply(this, arguments));
  }

  _createClass(Media, [{
    key: 'render',
    value: function render() {
      var entity = _draftJs.Entity.get(this.props.block.getEntityAt(0));

      var _entity$getData = entity.getData();

      var src = _entity$getData.src;

      var type = entity.getType();
      var media = void 0;
      if (type === 'AUDIO') {
        media = _react2.default.createElement(Audio, { src: src });
      } else if (type === 'IMAGE') {
        media = _react2.default.createElement(Image, { src: src });
      } else if (type === 'VIDEO') {
        media = _react2.default.createElement(Video, { src: src });
      }
      return media;
    }
  }]);

  return Media;
}(_react.Component);

exports.default = Media;