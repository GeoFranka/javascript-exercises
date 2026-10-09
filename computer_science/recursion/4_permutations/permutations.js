const permutations = function(array) {
    // basecase:
    if(array.length===0){
        return [array];
    }

    const newNumber = array.slice(-1)[0];
    let newPerms = [];

    permutations(array.slice(0,-1)).forEach((subArray)=>{
        for(let pos = 0; pos < array.length; pos++){
            newPerms.push(subArray.toSpliced(pos, 0, newNumber));
        }
    });

    return newPerms;

};
  
// Do not edit below this line
module.exports = permutations;
