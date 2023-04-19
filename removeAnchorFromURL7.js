function removeUrlAnchor(url){
   // set output to string
   let output = '';
   // split url into array and iterate through to find #
   let urlArr = url.split('');
   urlArr.forEach(char => {
    if(char == '#') {
        // assign to variable with indexOf
        badChar = urlArr.indexOf(char);
    } 
})
// create if statement to remove anything after this index with >
    if(urlArr.includes('#')) {
       output = urlArr.slice(0, badChar).join('');
    } else {
        output = urlArr.join('');
    }
   // assign this new array to output with join method
   return output;
  }
  console.log(removeUrlAnchor('www.codewars.com#about'));