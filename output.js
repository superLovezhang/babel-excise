"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _getIterator = require("@babel/runtime-corejs3/core-js/get-iterator");

var _Array$isArray = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");

var _Symbol2 = require("@babel/runtime-corejs3/core-js-stable/symbol");

var _Array$from = require("@babel/runtime-corejs3/core-js-stable/array/from");

var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

require("core-js/modules/es.function.name.js");

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/values"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _Symbol2 === "undefined" || _getIteratorMethod(o) == null) { if (_Array$isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _getIterator(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// 新的语法 env能够转换
var pickObjFromArrByPropertiesValue = function pickObjFromArrByPropertiesValue(arr, propertiesValue) {
  var _iterator = _createForOfIteratorHelper(arr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var obj = _step.value;

      // 新的API env也无能为力 但是polyfill(已经废弃，拆解为core.js负责模拟全局变量和api和regenerator负责将模拟的全局变量和api换个名字防止全局污染)可以创建出ES5的环境
      for (var _i = 0, _Object$values = (0, _values["default"])(obj); _i < _Object$values.length; _i++) {
        var value = _Object$values[_i];
        if (value === propertiesValue) return obj;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return null;
}; // 新的全局变量 env无能为力


var myPromise = function request(param) {
  return new _promise["default"](function (resolve, eject) {
    if (param >= 5) resolve('success！！！');else eject('error！！！');
  });
};

var data = [{
  name: '张三',
  age: 21,
  sex: '男'
}, {
  name: '李四',
  age: 24,
  sex: '女'
}, {
  name: '张五',
  age: 19,
  sex: '男'
}];

var Person = function Person() {
  (0, _classCallCheck2["default"])(this, Person);
  (0, _defineProperty2["default"])(this, "state", {});
  this["super"]();
  this.name = '张三';
};

var sy = (0, _symbol["default"])(1);
console.log(pickObjFromArrByPropertiesValue(data, "张三"));
myPromise(5).then(function (res) {
  return console.log(res);
})["catch"](function (err) {
  return console.log(err);
});
