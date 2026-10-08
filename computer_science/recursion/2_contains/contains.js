const contains = function(myObject, searchedValue) {
    const values = Object.values(myObject);
    if(values.includes(searchedValue)) return true;

    const nestedObjects = values.filter((val)=>{
        return typeof val === 'object' && !Array.isArray(val) && val !== null;
    });
    
    return nestedObjects.some((nestedObject)=>{
        return contains(nestedObject, searchedValue);
    });

};

// Do not edit below this line
module.exports = contains;
