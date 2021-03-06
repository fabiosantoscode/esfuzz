// Generated by CoffeeScript 2.0.0-beta7
void function () {
  var cache$, Node, Number_, oneOf, randomElement, randomInt;
  Node = require('../node');
  oneOf = require('../combinators').oneOf;
  cache$ = require('../random');
  randomInt = cache$.randomInt;
  randomElement = cache$.randomElement;
  Number_ = function (super$) {
    extends$(Number_, super$);
    Number_.prototype.type = 'Literal';
    function Number_() {
      oneOf([
        function (this$) {
          return function () {
            this$.value = 0;
            return this$.formatInt();
          };
        }(this),
        function (this$) {
          return function () {
            this$.value = randomInt(1e6);
            return this$.formatInt();
          };
        }(this),
        function (this$) {
          return function () {
            this$.value = randomInt(Math.pow(2, 53) - 1);
            return this$.formatInt();
          };
        }(this),
        function (this$) {
          return function () {
            var base, size;
            size = randomInt(20);
            base = randomInt(200) / 100;
            this$.raw = '' + base + randomElement([
              'e',
              'E'
            ]) + size;
            return this$.value = parseFloat(this$.raw);
          };
        }(this),
        function (this$) {
          return function () {
            return this$.value = Math.random();
          };
        }(this),
        function (this$) {
          return function () {
            this$.raw = ('' + Math.random()).slice(1, 3 + randomInt(10));
            return this$.value = parseFloat(this$.raw);
          };
        }(this),
        function (this$) {
          return function () {
            return this$.value = Math.random() * Math.pow(2, 16);
          };
        }(this)
      ])();
    }
    Number_.prototype.formatInt = function () {
      switch (randomInt(10)) {
      case 0:
        return this.raw = '' + randomElement([
          '0',
          '00',
          '000',
          '0000'
        ]) + this.value.toString(8);
      case 1:
        return this.raw = '0' + randomElement([
          'x',
          'X'
        ]) + this.value.toString(16);
      case 3:
        return this.raw = '' + this.value + '.';
      }
    };
    return Number_;
  }(Node);
  module.exports = function () {
    return new Number_;
  };
  function isOwn$(o, p) {
    return {}.hasOwnProperty.call(o, p);
  }
  function extends$(child, parent) {
    for (var key in parent)
      if (isOwn$(parent, key))
        child[key] = parent[key];
    function ctor() {
      this.constructor = child;
    }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }
}.call(this);
