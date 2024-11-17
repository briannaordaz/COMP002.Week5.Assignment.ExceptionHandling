// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64



class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Your code here.
  // we have to do a while loop so that if the code fails, it will allow us to keep trying to debug the correct code
  while(true) {
    // then we add a try-catch statement. the "try" will try out the code and the "catch" will catch the error
    try {
      // this will execute the code and give us the result
      return primitiveMultiply(a, b); 
      // this will catch the error if there is one
    } catch (error) {
      // this is an if statement, and this is what the output will be if there is an error in the code
        if (!(error instanceof MultiplicatorUnitFailure)) {
          // the "throw error" tells the system to throw an error if there is one
          throw error;
        }
    }
    

  }
}

console.log(reliableMultiply(5, 6));  // output: 30