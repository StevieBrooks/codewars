function isPangram(string){
    // set output to bool
    let containsEveryLetter = '';
    // create array representing alphabet
    let alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))
    // create new array with split method
    let newArr = string.split('');
    // use every() method to iterate through first array and cross ref with 2nd array, store in output
    containsEveryLetter = alphabet.every(item => newArr.includes(item));
    // return that new variable, should be true or false
    return containsEveryLetter;
  }
  console.log(isPangram('Cwm fjord bank glyphs vext quiz is a pangram'));