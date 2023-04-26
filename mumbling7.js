function accum(s) {
  // create new array to store output
  let output = [];
  let output2 = [];
	// split param string into array
  let splitIt = s.split('');
  // iterate through the array
  // multiply each iteration by its index and push to new array
  splitIt.forEach(el => output.push(el.toLowerCase().repeat(splitIt.indexOf(el) +1)));
  // for each iteration on new array, cap 1st letter
  output.forEach(item => output2.push(item.charAt(0).toUpperCase() + item.slice(1)));
  // join with hyphen and return
  return output2.join('-');
}

console.log(accum('tHanKs'));