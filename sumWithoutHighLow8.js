function sumArray(array) {
    // set output as number
    let output = 0;
    // set variables for highest/lowest numbers
    let highNum = array[0];
    let lowNum = array[0];
    // iterate through array to find highest/lowest numbers
    for(let i = 0; i < array.length; i++) {
    // using conditional, assign new high/low values to variables
      if(array[i] < lowNum) {
        lowNum = array[i];
      } else if(array[i] > highNum) {
        highNum = array[i];
      }
    }
    // add all values in array together and minus high/low
    output = array.reduce((prev, next) => prev + next, 0) - highNum - lowNum;
    // return output
    return output;
}
console.log(sumArray([3, 8, 39, 6, 1, 3]));