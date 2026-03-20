const fibonacci = function(n) {

    if(n<0){
        return "OOPS";
    } else if(n==0){
        return 0;
    }

    let prepreceding = 0;
    let preceding = 1;
    for(let i = 2; i<=n; i++){
        let current = prepreceding + preceding;
        prepreceding = preceding;
        preceding = current;
    }

    return preceding;

};

// Do not edit below this line
module.exports = fibonacci;
