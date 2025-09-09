const palindromes = function (str = "") {
    str = str.toLowerCase();
    
    let arr = Array.from(str)
            .filter(char => char !== " " && char !== "." && char !== "!" && char !== ",")
            .join('');
    
    let arrReversed = arr.split('').reverse().join('');
    
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i] + " " + arrReversed[i]);
        if(arr[i] !== arrReversed[i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
