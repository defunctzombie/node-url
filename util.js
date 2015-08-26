'use strict';

var util = module.exports = require('util');
util.isString = util.isString || isString;
util.isObject = util.isObject || isObject;
util.isNull = util.isNull || isNull;
util.isNullOrUndefined = util.isNullOrUndefined || isNullOrUndefined;

function isString(arg) {
  return typeof(arg) === 'string';
}

function isObject(arg) {
  return typeof(arg) === 'object' && arg !== null;
}

function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return arg == null; // jshint ignore:line
}
