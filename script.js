'use strict';

//Task 1.2
function calculateArgs(...args) {
  return arguments.length;
}

console.log(`Task 1.2, args length: ${calculateArgs(1, null, 'third', 4)}`);


//Task 1.3
function compareNumbers(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return 1;
  }
  if (firstNumber < secondNumber) {
    return -1;
  }
  return 0;
}

console.log(`Task 1.3, compare 2 numbers. 707 and 10: ${compareNumbers(707, 10)}, -4 and 5: ${compareNumbers(-4, 5)}, 50 and 50: ${compareNumbers(50, 50)}`);


//Task 1.4
function calcFactorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}

console.log(`Task 1.4, factorial: ${calcFactorial(12)}`);


//Task 1.5
function numbersConcat(first, second, third) {
  return Number(`${first}${second}${third}`);
}

console.log(`Task 1.5, 3 digit number: ${numbersConcat(1,3,0)}`);


//Task 1.6
function squareCalc(length, width) {
  return width ? length * width : length * length; 
}

console.log(`Task 1.6, calculate square of reactangle: ${squareCalc(4, 5)}. Of square: ${squareCalc(5)}`);


//Task 2.1
function isPerfectNumber(number) {
  if (number <= 1) {
    return 'Please enter number greater than 1.';
  } else {
    let divisorsSum = 1;

    for(let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        if (number / i === i) {
          divisorsSum += i;
        } else {
          divisorsSum += i;
          divisorsSum += number/i;
        }
      }
    }
    
    return divisorsSum === number;
  }
}

console.log(`Task 2.1 99 perfect? ${isPerfectNumber(99)}. 8128 perfect? ${isPerfectNumber(8128)}.`);


//Task 2.2
function findPerfectNumbers(startNumber, endNumber) {
  if (startNumber <= 1) {
    return 'Please, enter numbers greater than 1';
  }
  let perfectArr = [];

  for (let i = startNumber; i <= endNumber; i++) {
    if (isPerfectNumber(i)) {
      perfectArr.push(i);
    }
  }

  return `Perfect numbers in range from ${startNumber} to ${endNumber} are: ${perfectArr}`;
}

console.log(`Task 2.2 ${findPerfectNumbers(2, 8400)}`);