const fibonacci = function(n) {
  
  let count;
  if(typeof n !== 'number') {
    count = parseInt(n);
  }  else {
    count = n;
  }

  if(count === 0) return 0;
  if(count < 0) return "OOPS";
  let secondPrev = 0;
  let firstPrev = 1;

  for( let i = 2; i <= count; i++) {
    let curr = secondPrev + firstPrev;
    secondPrev = firstPrev;
    firstPrev = curr;
  }
  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
