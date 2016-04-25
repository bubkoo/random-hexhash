'use strict';

var assign     = require('object-assign');
var toLength   = require('to-length');
var randomChar = require('random-char');

var HEX_POOL = "0123456789abcdef";

module.exports = function (options) {

  options = assign({ length: 40, casing: 'lower' }, options);

  var pool = options.casing === 'upper'
    ? HEX_POOL.toUpperCase()
    : HEX_POOL;

  var length = toLength(options.length) || 40;

  var result = '';

  while (length--) {
    result += randomChar({ pool: pool });
  }

  return result;
};
