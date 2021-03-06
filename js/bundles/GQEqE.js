var pageComponent =
webpackJsonppageComponent([18],{

/***/ 300:
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

var _stringSoy = __webpack_require__(301);

var _stringSoy2 = _interopRequireDefault(_stringSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GQEqE = function (_Component) {
  _inherits(GQEqE, _Component);

  function GQEqE() {
    _classCallCheck(this, GQEqE);

    return _possibleConstructorReturn(this, (GQEqE.__proto__ || Object.getPrototypeOf(GQEqE)).apply(this, arguments));
  }

  return GQEqE;
}(_metalComponent2.default);

;

_metalSoy2.default.register(GQEqE, _stringSoy2.default);

exports.default = GQEqE;

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.GQEqE = undefined;

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

  // This file was automatically generated from string.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace GQEqE.
   * @public
   */

  goog.module('GQEqE.incrementaldom');

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
    var param1831 = function param1831() {
      ie_open('h6');
      var dyn43 = opt_data.page.description;
      if (typeof dyn43 == 'function') dyn43();else if (dyn43 != null) itext(dyn43);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('capitalize');
      ie_close('h2');
      ie_open('p');
      itext('Capitalize the string.');
      ie_close('p');
      $templateAlias2({ code: 'R.capitalize.run(\'cat\')\n// Cat', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('match');
      ie_close('h2');
      ie_open('p');
      itext('Check regex match.');
      ie_close('p');
      $templateAlias2({ code: 'R.match.run(\'.*(a).*\', \'cat\')\n// (cat, a)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('pad');
      ie_close('h2');
      ie_open('p');
      itext('Pad the string to the length, with given padding.');
      ie_close('p');
      $templateAlias2({ code: 'R.pad.run(5, \'*\', \'cat\')\n// *cat*', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('padLeft');
      ie_close('h2');
      ie_open('p');
      itext('Pad the string to the left to the length, with given padding.');
      ie_close('p');
      $templateAlias2({ code: 'R.pad.run(5, \'*\', \'cat\')\n// **cat', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('padRight');
      ie_close('h2');
      ie_open('p');
      itext('Pad the string to the right to the length, with given padding.');
      ie_close('p');
      $templateAlias2({ code: 'R.pad.run(5, \'*\', \'cat\')\n// cat**', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('replace');
      ie_close('h2');
      ie_open('p');
      itext('Replace the string with replacement, only for the first occurrence of the matching.');
      ie_close('p');
      $templateAlias2({ code: 'R.replace.run(\'cat\', \'dog\', \'I love cats\')\n// I love dogs', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('replaceAll');
      ie_close('h2');
      ie_open('p');
      itext('Replace the string with replacement, for all occurrences of the matching.');
      ie_close('p');
      $templateAlias2({ code: 'R.replaceAll.run(\'cat\', \'dog\', \'I love cats\')\n// I love dogs', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('split');
      ie_close('h2');
      ie_open('p');
      itext('Split the string into a list.');
      ie_close('p');
      $templateAlias2({ code: 'R.split.run(\' \', \'a b c\')\n// (a, b, c)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('test');
      ie_close('h2');
      ie_open('p');
      itext('Test for the string matching.');
      ie_close('p');
      $templateAlias2({ code: 'R.test.run(\'.*a.*\', \'cat\')\n// true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '10');
      ie_open('h2');
      itext('toLower');
      ie_close('h2');
      ie_open('p');
      itext('Convert the string into lowercase.');
      ie_close('p');
      $templateAlias2({ code: 'R.toLower.run(\'ABC\')\n// abc', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '11');
      ie_open('h2');
      itext('toUpper');
      ie_close('h2');
      ie_open('p');
      itext('Convert the string into uppercase.');
      ie_close('p');
      $templateAlias2({ code: 'R.toUpper.run(\'abc\')\n// ABC', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '12');
      ie_open('h2');
      itext('trim');
      ie_close('h2');
      ie_open('p');
      itext('Trim the string.');
      ie_close('p');
      $templateAlias2({ code: 'R.trim.run(\' abc \')\n// abc', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1831 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'GQEqE.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var GQEqE = function (_Component) {
  _inherits(GQEqE, _Component);

  function GQEqE() {
    _classCallCheck(this, GQEqE);

    return _possibleConstructorReturn(this, (GQEqE.__proto__ || Object.getPrototypeOf(GQEqE)).apply(this, arguments));
  }

  return GQEqE;
}(_metalComponent2.default);

_metalSoy2.default.register(GQEqE, templates);
exports.GQEqE = GQEqE;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[300]);