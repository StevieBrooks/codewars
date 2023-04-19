function countPositivesSumNegatives(input) {
    // set output to array
    let output = [];
    // create rule for 0 or null
    if(input == null || input.length == 0) {
      return output;
    }
    // create two variables for return array elements
    let item1 = 0;
    let item2 = 0;
    // do the math and push answers to two variables
    input.map((item) => {
      if(item > 0) {
        item1++;
      } else if(item < 0) {
        item2 += item;
      }
    })
    // push results to output and return
    output.push(item1);
    output.push(item2);
    return output;
  }