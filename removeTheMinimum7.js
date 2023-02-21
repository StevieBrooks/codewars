function removeSmallest(numbers) {
    // set output as array
    let output = [];
    // declare variable for storing smallest number
    let smallNum = numbers[0];
    // iterate through array
    for(let number of numbers) {
        // find smallest number
        if(number < smallNum) {
            smallNum = number;
        }
    }
    // remove smallest number and return new array
    let newArr = numbers;
    let removeNums = newArr.indexOf(smallNum).splice(smallNum, 1);
    return newArr;
  }

  console.log(removeSmallest([9, 4, 3, 3, 7, 2, 4, 1, 7]));