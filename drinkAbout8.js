function peopleWithAgeDrink(old) {
  // set outpout to string
  let output = "";
  // write switch statement to determine tipple
  if(old < 14) {
    output = "drink toddy";
  } else if(old >= 14 && old < 18) {
    output = "drink coke";
  } else if(old >= 18 && old < 21) {
    output = "drink beer";
  } else {
    output = "drink whisky";
  }

  // return output
  console.log(output);
};

peopleWithAgeDrink(19);

// CANNOT USE COMPARISON STATEMENTS FOR THE CASES IN A SWITCH STATEMENT - USE IF/ELSE INSTEAD!