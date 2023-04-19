function DNAStrand(dna){
    // set output to string
    let output = [];
    // set new variable and assign paramater with split method
    const splitString = dna.split('');
    // use replace method and return
    for(let char of splitString) {
        if(char == 'A') {
            output.push('T');
        } else if(char == 'T') {
            output.push('A');
        } else if (char == 'C') {
            output.push('G');
        } else if(char == 'G') {
            output.push('C');
        }
    }
    return output.join('');
  }

console.log(DNAStrand('TTTGCA'));

/* THIS WAS A BIT OF PISSING AROUND. TRIED USING VARIOUS METHODS CHAINED TOGETHER BUT
NO LUCK. THEN TRIED USING A SWITCH STATEMENT BUT NO LUCK. */