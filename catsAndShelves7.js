function solution(start, finish) 
{
  // set output as number
  let output = 0;
  // find amt by subtracting start from finish
  let amount = finish - start;
  // create if statement, amt < 3 ? 2 : amt / 3 IGNORE THIS BOLLOCKS!
  // create variables for position, small jump and big jump
  let smallJump = 1;
  let bigJump = 3;
  // figure out how many big jumps and small jumps go into amount
  switch(amount) {
    case 0:
        output = 0;
        break;
    case 1:
        output = 1;
        break;
    case 2:
        output = 2;
        break;
    case amount % 3 == 0:
        output = amount / 3;
        break;
  }
  return output;
}
console.log(solution(1, 10));