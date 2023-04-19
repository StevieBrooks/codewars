function queueTime(customers, n) {
    // set output to integer
    let output = 0;
    // use reduce to add all customers
    let cusTotal = customers.reduce((prev, next) => 
      prev + next, 0
    );
    // divide total by n and store value in output
    output = cusTotal / n;
    // write if statement for anomaly in array
    for(let customer of customers) {
        if(customer > output) {
            output = customer;
        } else {
            output = output;
        }
    }
    //return output
    return Math.ceil(output);
  }

  console.log(queueTime([1,2,3,4], 1));