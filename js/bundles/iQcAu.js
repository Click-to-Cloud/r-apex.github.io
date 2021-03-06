var pageComponent =
webpackJsonppageComponent([28],{

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _comparatorSoy = __webpack_require__(281);

var _comparatorSoy2 = _interopRequireDefault(_comparatorSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iQcAu = function (_Component) {
  _inherits(iQcAu, _Component);

  function iQcAu() {
    _classCallCheck(this, iQcAu);

    return _possibleConstructorReturn(this, (iQcAu.__proto__ || Object.getPrototypeOf(iQcAu)).apply(this, arguments));
  }

  return iQcAu;
}(_metalComponent2.default);

;

_metalSoy2.default.register(iQcAu, _comparatorSoy2.default);

exports.default = iQcAu;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.iQcAu = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from comparator.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace iQcAu.
   * @public
   */

  goog.module('iQcAu.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param1016 = function param1016() {
      ie_open('h6');
      var dyn33 = opt_data.page.description;
      if (typeof dyn33 == 'function') dyn33();else if (dyn33 != null) itext(dyn33);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('ascend');
      ie_close('h2');
      ie_open('p');
      itext('Convert a function into an ascending comparator.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.ascend.run(R.identity);\nSystem.debug(f.run(1, 2));\n// -1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('cascade');
      ie_close('h2');
      ie_open('p');
      itext('Combine the comparator functions into one.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.cascade.run(\n    (Func)R.ascend.run(R.prop.apply(\'FirstName\')),\n    (Func)R.ascend.run(R.prop.apply(\'Description\'))\n);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('clamp');
      ie_close('h2');
      ie_open('p');
      itext('Limit the value between the min and the max.');
      ie_close('p');
      $templateAlias2({ code: 'R.clamp.run(1, 3, 5)\n// 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('comparator');
      ie_close('h2');
      ie_open('p');
      itext('Convert a Boolean-returning comparator to an Integer-returning comparator.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.comparator.run(R.lt);\nSystem.debug(f.run(1, 2));\n// -1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('compare');
      ie_close('h2');
      ie_open('p');
      itext('Compare two objects.');
      ie_close('p');
      $templateAlias2({ code: 'R.compare.run(1, 2)\n// -1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('descend');
      ie_close('h2');
      ie_open('p');
      itext('Convert a function into an descending comparator.');
      ie_close('p');
      $templateAlias2({ code: 'Func f = (Func)R.descend.run(R.identity);\nSystem.debug(f.run(1, 2));\n// 1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1016 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'iQcAu.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var iQcAu = function (_Component) {
  _inherits(iQcAu, _Component);

  function iQcAu() {
    _classCallCheck(this, iQcAu);

    return _possibleConstructorReturn(this, (iQcAu.__proto__ || Object.getPrototypeOf(iQcAu)).apply(this, arguments));
  }

  return iQcAu;
}(_metalComponent2.default);

_metalSoy2.default.register(iQcAu, templates);
exports.iQcAu = iQcAu;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[280]);