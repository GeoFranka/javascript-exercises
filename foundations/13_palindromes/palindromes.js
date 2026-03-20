const palindromes = function (word) {
    let wordRaw = word.toLowerCase().replace(new RegExp("[^a-z0-9]", "g"), "");
    
    let reversed = '';
    for(let i = wordRaw.length-1; i>=0; i--){
        reversed += wordRaw[i];
    }

    return wordRaw === reversed;
};

// Do not edit below this line
module.exports = palindromes;
