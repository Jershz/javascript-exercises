const findTheOldest = function(objArr) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return objArr.reduce((oldest, current) => {
        if(current.yearOfDeath === undefined) current.yearOfDeath = currentYear;
        if(oldest.yearOfDeath === undefined) oldest.yearOfDeath = currentYear;
        return (current.yearOfDeath - current.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth) ? current : oldest;
    }, objArr[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
