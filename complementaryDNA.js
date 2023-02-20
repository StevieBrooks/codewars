function DNAStrand(dna){
    // set output to string
    let output = dna.split('').map((letter) => {
        letter.replace('A', 'T');
        letter.replace('T', 'A');
        letter.replace('C', 'G');
        letter.replace('G', 'C');
    });
    // set new variable and assign paramater with split method
    // use replace method and return
    return output.join('');
  }

console.log(DNAStrand('TTTGCA'));
