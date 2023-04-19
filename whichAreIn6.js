function inArray(array1,array2){
    // set output as array
    let output = [];
    // set nested loops starting with array2, then array1
    for(let element of array2) {
      for(let el of array1) {
        // make if statement to check if array2 elements include array1 elements
        if(element.includes(el) && !output.includes(el)) {
          // if so, push array1 element to output array
          output.push(el);
        }
      }
    }
    console.log(output.sort());
    // return sorted array
  }

  inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])

  /* This took a while to crack because my output array kept containing duplicates. I spent
  20 minutes searching for how to remove dupes, but then realised I can just add another 
  clause in the if statement.  */