const pascal = function(n) {
  // basecase:
  if(n===1){
    return [1];
  }

  const prevPascal = pascal(n-1);
  let newPascal = [];

  for(let i=0; i<n; i++){
    newPascal.push( (prevPascal[i-1]||0) + (prevPascal[i]||0) );
  }
  
  return newPascal;

};
  
// Do not edit below this line
module.exports = pascal;
