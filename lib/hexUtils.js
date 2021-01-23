'use strict'

const vapjsUtil = require('vapjs-util')

module.exports = {
  incrementHexNumber,
  formatHex,
}

function incrementHexNumber(hexNum) {
  return formatHex(vapjsUtil.intToHex((parseInt(hexNum, 16) + 1)))
}

function formatHex (hexNum) {
  let stripped = vapjsUtil.stripHexPrefix(hexNum)
  while (stripped[0] === '0') {
    stripped = stripped.substr(1)
  }
  return `0x${stripped}`
}
