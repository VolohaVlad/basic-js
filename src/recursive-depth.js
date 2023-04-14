const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) return 1;
    
    let result = 0;
    arr.forEach(element => {
      let localDepth = 1;
      if(element instanceof Array){
        localDepth += this.calculateDepth(element);
      }
      if (localDepth > result){
        result = localDepth;
      }
    });
    return result;
  }
}

module.exports = {
  DepthCalculator
};
