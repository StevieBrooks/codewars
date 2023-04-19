function alphabetPosition(text) {
    // set output to string
    let output = [];
    // create array for letters of alphabet, first item-empty string
    let alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // create variable to store text.split()
    let splitText = text.toLowerCase().split('');
    // iterate through this variable and use replace method, push all to output
    for (let i = 0; i < splitText.length; i++) {
        for (let alphai = 0; alphai < alphabet.length; alphai++) {
            if(splitText[i] === alphabet[alphai]) {
                output.push(alphabet.indexOf(alphabet[alphai]));
            }
        }
    }
    // return output
    return output.join(' ');
  }
  console.log(alphabetPosition('Hello I am Stevie'));

  // Took me a while to realise that it wasn't working because I wasn';t using the toLowerCase() methid. 