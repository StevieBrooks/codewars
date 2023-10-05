function fakeBin(x){
  // set output to string
  let output;
  // separate string into array
  output = String(x).split("");
  // iterate through array
  output = output.map(item => {
    // write conditional and replace each item
    if(item < 5) {
      return 0;
    } else {
      return 1;
    }
  })
  // join array to make output
  output = output.join("");
  // return output
  console.log(output);
}

fakeBin(4489932);