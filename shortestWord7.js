function findShort(s){
  // set output as int
  let output = 0;
  // declare array for split string
  let sArr = s.split(' ');
  // declare shortest word variable and set to index 0 of array
  let shortestWord = sArr[0];
  // iterate through array
  for(i in sArr) {
  // write if statement to reassign shortest word if iteration is shorter
    if(sArr[i].length < shortestWord.length) {
      shortestWord = sArr[i];
    }
  }
  // assign length of shortest variable to output and return
  return shortestWord;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));