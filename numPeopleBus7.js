var number = function(busStops){
    // set output as number
    let output = 0;
    // iterate through array and add first item of each
    let addTotal = busStops.map(item => item[0] + item[0]);
    // subtract second item of each for total
    let minTotal = busStops.map(item => item[1] + item[1]);
    output = addTotal - minTotal;
    return output;
  }

  // This hasn't worked.