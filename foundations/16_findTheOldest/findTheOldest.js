const findTheOldest = function(peoplesArray) {

    let oldest;

    peoplesArray.forEach(person => {
        
        person.age = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;

        if(oldest===undefined || oldest.age < person.age){
            oldest = person;
        }

    });

    peoplesArray.forEach(p => {delete p.age});

    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
