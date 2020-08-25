"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SortedList =
/*#__PURE__*/
function () {
  function SortedList() {
    _classCallCheck(this, SortedList);

    this.items = [];
    this.length = this.items.length;
  }

  _createClass(SortedList, [{
    key: "add",
    value: function add(item) {
      this.items.sort().push(item);
    }
  }, {
    key: "get",
    value: function get(pos) {
      if (pos > this.items.length) {
        throw new Error('OutOfBounds');
      } else {
        return this.items[pos];
      }
    }
  }, {
    key: "max",
    value: function max() {
      if (this.items.length == 0) {
        throw new Error('EmptySortedList');
      } else {
        Math.max.apply(Math, _toConsumableArray(this.items));
      }
    }
  }, {
    key: "min",
    value: function min() {
      if (this.items.length == 0) {
        throw new Error('EmptySortedList');
      } else {
        Math.min.apply(Math, _toConsumableArray(this.items));
      }
    }
  }, {
    key: "sum",
    value: function sum() {
      if (this.items.length == 0) {
        return 0;
      } else {
        this.items.reduce(function (a, b) {
          return a + b;
        });
      }
    }
  }, {
    key: "avg",
    value: function avg() {
      if (this.items.length == 0) {
        throw new Error('EmptySortedList');
      } else {
        var total = 0;

        for (var i = 0; i < this.items.length; i++) {
          total += this.items[i];
        }

        var avg = total / this.items.length;
        return avg;
      }
    }
  }]);

  return SortedList;
}();

module.exports = SortedList;