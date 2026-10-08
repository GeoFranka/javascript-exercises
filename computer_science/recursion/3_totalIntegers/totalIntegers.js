const isObject = (smth) => typeof smth === 'object' && smth !== null;

const totalIntegers = function(arrayOrObject) {

    if(!isObject(arrayOrObject)){
        return undefined;
    }

    return Object.values(arrayOrObject).reduce((prev, current)=>{
        if(isObject(current)){
            return prev + totalIntegers(current);
        }
        return prev + (Number.isInteger(current) ? 1 : 0);
    }, 0);
  
};
  
// Do not edit below this line
module.exports = totalIntegers;
