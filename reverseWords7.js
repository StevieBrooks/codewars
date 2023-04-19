function reverseWords(str) {
    // set output as string
    let output = '';
    // split input paramater by spaces
    let newArr = str.split(' ');
    // map through each and reverse
    let revArr = newArr.map(word => word.split('').reverse().join(''));
    // push to output
    output = revArr.join(' ')
    // return output with join method
    return output;
  }

// Completed in roughly ten mins. Oh yeah!