function selReverse(array, length) {
    // set output to new array
    let output = [];
    // splice first parameter, reverse and push to new array
    output.push(array.splice(0, length).reverse());
    output.push(array.splice(0, length).reverse());
    output.push(array.splice(0, length).reverse());
    // return new array
    return output.flat();
  }

  console.log(selReverse([2, 3, 4, 5, 6, 7, 8, 9], 2));