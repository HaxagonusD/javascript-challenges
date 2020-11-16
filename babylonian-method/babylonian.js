const squareRoot = (radicand) => {
  let guess = radicand / 2 - .9; // initial guess 
  let radicandDivideGuess = radicand / guess; // 
  //                    some number
  // guess - actual answer -- (randicand / guess)
  while (!Number.isInteger(guess)) { // while guess is not an integer
    guess = (guess + radicandDivideGuess) / 2; //average 
    radicandDivideGuess = radicand / guess;
    guess = Number(Number.parseFloat(guess).toFixed(5));

  }
  return guess;
};
console.log(squareRoot(64));
module.exports = squareRoot;
