function openOrSenior(data){
    // set output as array
    let output = [];
    // iterate through data
    data.forEach((item) => {
        // write rule to determine validity of index 0 and 1, push cat to output
        item[0] >= 55 && item[1] > 7 ? output.push('Senior') : output.push('Open');
    })
    // return output
    return output;
  }

  console.log(openOrSenior([[55, 2], [20, 3], [65, 8], [60, 4]]));