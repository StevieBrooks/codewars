function getMiddle(s)
{
  // set output to string
  let output = '';
  // split into array to determine length with variable
  let wordSplit = s.split('');
  let arrLength = wordSplit.length;
  // use that variable to find correct index and return
  if(arrLength % 2 == 0) {
    output = wordSplit[arrLength / 2 - 1] + wordSplit[arrLength / 2] ;
  } else {
    output = wordSplit[Math.floor(arrLength / 2)]; 
  }
  // return output
  return output;
}

console.log(getMiddle('angelic'));