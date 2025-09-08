const leapYears = function(year) {
    //if year divided by 4 has no remainder
    //and year divided by 100 has a remainder
    //return true
    //if year divided by 4 has no remainder
    //and year divided by 100 has no remainder
    //return true

    if(year % 4 === 0 && year % 100 !== 0) return true;
    if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
