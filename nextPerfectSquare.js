function findNextSquare(sq) {
    // set output to int
    let output = 0;
    // set variable to store sqrt of param
    let sqRoot = String(Math.sqrt(sq));
    // write if statement to return -1 if var.includes('.')
    if(sqRoot.includes('.')) {
      output = -1;
    // else var++
    } else {
        sqRoot = Number(sqRoot);
        sqRoot++;
        output = sqRoot * sqRoot;
    }
    // return var * var
    return output;
  }

  console.log(findNextSquare(81));