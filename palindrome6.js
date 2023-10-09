function palindrome(num,s) { 
  // edgecases first - return "not valid"
  if(Number.isInteger(num) == false || num < 0 || Number.isInteger(s) == false || s < 0) {
    return "Not valid";
  } else {
    if(num < 10) {
      num = 10;
    }
    // set output to array - max length is s
    let output = [];
    // create for loop with i as num and length of 10000
    for(let i = num; i < num * (s + s); i++) {
      // if statement to find it i is same in reverse, push to array
      if(i == Number(i.toString().split("").reverse().join(""))) {
        output.push(i);
        // if aray length is 4, break loop
        if(output.length == s){
          break;
        }
      }
    }
    // return array
    return output;
  }
}

console.log(palindrome(18, 1));

// let i = 334;
// console.log(i);
// console.log(Number(i.toString().split("").reverse().join("")));


// THE BASIC STRUCTURE OF THIS ONE WAS QUITE EASY TO ASSEMBLE. HOWEVER, THE 2ND PART OF THE FOR LOOP TOOK A BIT OF PLAYING WITH UNTIL THERE WERE NO MORE EDGE CASES GETTING THE BETTER OF ME. 