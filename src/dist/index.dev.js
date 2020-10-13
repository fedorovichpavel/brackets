"use strict";

module.exports = function check(str, bracketsConfig) {
  for (var i = 0; i < 35; i++) {
    str = str.replace(/\(\)/, '');
    str = str.replace(/\{\}/, '');
    str = str.replace(/\[\]/, '');
    str = str.replace(/\|\|/, '');
    str = str.replace(/12/, '');
    str = str.replace(/34/, '');
    str = str.replace(/56/, '');
    str = str.replace(/77/, '');
    str = str.replace(/88/, '');
  }

  if (str !== '') {
    return false;
  } else {
    return true;
  }
};