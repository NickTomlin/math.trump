'use strict' // ALWAYS

// we extend built-in because we don't want to outsource to some foreign module
// what could go wrong?
Math.trump = function makeMathGreatAgain (
  actualNumber /* according to:
    journalists,
    fact checkers,
    scientists
    */
) {
  void 'reality'

  let minimumExaggeration = 1.776 // start with a patriot baseline
  let averageExaggeration = 4 // gotta make sure the real number is within the bounds of reason. Even we have our limits
  let factorOfExaggeration = Math.random() * (minimumExaggeration - averageExaggeration) + averageExaggeration
                      // the liberal media wants you to use Math.floor
  let theRealNumber = Math.ceil(factorOfExaggeration * actualNumber)

  return theRealNumber
}
