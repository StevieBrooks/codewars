function sumOfMinimums(arr) {
 // set output to number
 let output = 0;
 // set array for adding smallest numbers
 let newArr = [];
 // make nested for loop and determine smallest number in each iteration
 for (let element of arr) {
   newArr.push(Math.min(...element));
}
 // push those numbers to new array and add using reduce() method
 // store in output and return
 output = newArr.reduce((prev, next) => prev + next, 0);
 console.log(output);
}

sumOfMinimums([[165, 2, 3, 4, 5], [65, 30, 40, 50], [10, 77, 30]]);

/* Took me a while to figure out why the Math.min() method wasn't working. 
Eventually realised I needed to use the three dots(...) before the variable. */