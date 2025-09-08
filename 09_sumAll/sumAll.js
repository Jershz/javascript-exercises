const sumAll = function(a, b) {
    if(!Number.isInteger(a+b)) return "ERROR";
    let sum = 0;
    let start = a;
    let end = b;
    if(a>b && a-b > 0) {        
        start = b;
        end = a;
    }

    for(let i = start; i <= end; i++) {
        sum += i;
    }
    return sum > 0 ? sum : "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
