function gimme (triplet) {
  // set output to integer
  let output = 0;
  // destructure array
  const [one, two, three] = triplet;
  //find max and min values
  const maxVal = Math.max(one, two, three);
  const minVal = Math.min(one, two, three);
  // iterate through array to find index of val not max and min
  output = triplet.map((item) => {
    return item != minVal && item != maxVal;
  })
  // return output
  return output.indexOf(true);
}

console.log(gimme([2.1, 3.2, 1.4])