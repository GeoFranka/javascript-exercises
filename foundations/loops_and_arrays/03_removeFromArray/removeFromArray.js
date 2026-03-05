const removeFromArray = function(arr, ...toBeRemoved) {

    let newArray = [];

    for (const el of arr){
        if(toBeRemoved.includes(el)){
            continue;
        }
        newArray.push(el);
    }

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
