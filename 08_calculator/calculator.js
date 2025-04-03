const add = function(x,y) {
  return x+y;	
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(x) {
	return x.reduce((total,current) => total+current,0);
};

const multiply = function(x) {
  return x.reduce((total,multiplayer) => total*multiplayer);
};

const power = function(x,y) {
  return Math.pow(x,y);
};

const factorial = function(x) {
  let product= 1
  for(i=x;i>0;i--){
    product *=i;
  }
  return product;
	
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
