function squareSum(numbers){
    // output should be a number
    let output = 0;
    // iterate through array and times each number by itself
    // make sure this goes to new array
    let squareNums = numbers.map((num) => num ** 2);
    // use reduce method to add those numbers togetherm, store in variable
    output = squareNums.reduce((prev, next) => prev + next, 0);
    // return said variable
    console.log(output);
  }

  squareSum([2, 4, 6]);

  /* 
  Initially, I tried using the forEach() method when assigning a value to 
  the squareNums variable, however, this kept returning undefined. Changing the 
  method to map() did the trick. 
  */