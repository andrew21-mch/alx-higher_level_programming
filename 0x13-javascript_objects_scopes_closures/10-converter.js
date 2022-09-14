#!/usr/bin/node
exports.converter = function (base) {
  return convFunc => convFunc.toString(base);
};
