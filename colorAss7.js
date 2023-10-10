function colourAssociation(array){
  let returnArr = array.map((item) => {
    const objectKey = item[0];
    const objectVal = item[1];
    const object = {
      [objectKey]: objectVal
    }
    return object;
  })
  return returnArr;
}

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]));