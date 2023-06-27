const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	const sum = arr.reduce((total, elem) => total + elem, 0);
  return sum;
};

const multiply = function(num1, ...num2) {
  let total = num1;
  for (const num of num2) {
    total *= num;
  }
  return total;
};

const power = function(base, exp) {
	return base**exp;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
