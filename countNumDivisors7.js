function getDivisorsCnt(n){
    // set output to 0
  let output = 1;
  // create for loop
  for(let i=0; i<n; i++) {
  // use modulus on each iteration, if true, output++
    if(n % i == 0) {
      output++;
    }
  }
  return output;
}