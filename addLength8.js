function addLength(str) {
    // set output as array
    let output = [];
      // use split method and stick in new array
      output = str.split(' ')
      // iterate through items with map, find length + concat with each item
      output = output.map((item) => item.concat(` ${item.length}`));
      // return output
      console.log(output);
    }
    
addLength('Hello this is a string');

/* Managed this in less than 10 minutes, including all the comments. */