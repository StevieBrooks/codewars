function twiceAsOld(dadYearsOld, sonYearsOld) {
  // set output to int
  let output = 0;
  // write if statement to find out if son already half as old as dad
  if(dadYearsOld == sonYearsOld * 2) {
    return output;
  } else if(dadYearsOld > sonYearsOld * 2) {
    // write loop to go up/down and add one year to output
    for(i = 0; i < 100; i++) {
      dadYearsOld++;
      sonYearsOld++;
      if(dadYearsOld == sonYearsOld * 2) {
        output = i+1;
        //retuyr output
        return output;
      }
    }
  } else if(dadYearsOld < sonYearsOld * 2) {
    for(i = 0; i < 100; i++) {
      dadYearsOld--;
      sonYearsOld--;
      if(dadYearsOld == sonYearsOld * 2) {
        output = i+1;
        return output;
      }
    }
  }
}
console.log(twiceAsOld(35, 7));