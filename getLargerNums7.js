function getLargerNumbers(a, b) {
  // set output to new array
  let output = [];
  // define index as 0
  let index = 0;
  // iterate through 1st array foreach
  a.forEach(item => {
    // use if statement to find which array has highest val for that index
    if(item >= b[index]) {
      // push highest val to new array
      output.push(item);
      index++;
    } else {
      output.push(b[index]);
      index++
    }
  })
  // return new array
  return output;
}

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2);