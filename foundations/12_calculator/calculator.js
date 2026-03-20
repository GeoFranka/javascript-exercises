const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((result, current)=> result * current);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(n) {
	// fakultaet = produkt aller natuerlichen zahlen bis n: 3! = 3 * 2 * 1
  let result = 1;
  for(let i = 1; i <= n; i++){
    result = result * i;
  }
  return result;
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
