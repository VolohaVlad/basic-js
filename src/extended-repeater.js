const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const uniqSep = '+';
  const uniqAdtSep = '|'
  let res = '';
  res += str;
  if(options.addition !== undefined){
    res += options.addition;
    if (options.additionRepeatTimes){
      for(let i = 0; i < options.additionRepeatTimes - 1; i++){
        if(options.additionSeparator !== undefined){
          res += options.additionSeparator;
        }
        else {
          res += uniqAdtSep;
        }
        res += options.addition;
      }
    }
  }
  let fullResult = '';
  fullResult += res;
  if (options.repeatTimes){
    for(let i = 1; i < options.repeatTimes; i++){
      if (options.separator !== undefined){
        fullResult += options.separator;
      }
      else {
        fullResult += uniqSep;
      }
      fullResult += res;
    }
  }
  return fullResult;
}

module.exports = {
  repeater
};
