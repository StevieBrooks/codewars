function highAndLow(numbersString) {
    // change string into array
    const numArr = numbersString.split(' ').map((numString) => {
        return parseInt(numString);
    });
    // create variables to represent highest and lowest and initiate those variables with first element in array
    let highest = numArr[0];
    let lowest = numArr[0];
    // loop through array and check/compare each iteration with highest/lowest number
    for (let i = 0; i < numArr.length; i++) {
        const currentNumber = numArr[i];
        if (currentNumber > highest) {
            highest = currentNumber;
        }
        if (currentNumber < lowest) {
            lowest = currentNumber;
        }
    }
    // return highest and lowest as string upon loop exhaustion
    return `${highest} ${lowest}`;

}
const answer = highAndLow('5 4 3 2 1');
console.log(answer);