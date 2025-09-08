const removeFromArray = function(arr) {
    console.log(arguments[0] + " This is arguments[0].");
    for(let i = 1; i < arguments.length; i++) {
        while(arr.includes(arguments[i])) {
            let index = arr.findIndex(item => item == arguments[i]);
            arr.splice(index, 1);
        }
    }
    return arr;
    // if(val2 === null) {
    //     while(arr.includes(val1)) {
    //         let index = arr.findIndex(item => item == val1);
    //         arr.splice(index,1);
    //     }        
    // }
    // else {
    //     while(arr.includes(val1)) {
    //         let index = arr.findIndex(item => item == val1);
    //         arr.splice(index,1);
    //     }
    //     while(arr.includes(val2)) {
    //         index = arr.findIndex(item => item == val2);
    //         arr.splice(index,1);
    //     }        
    // }
    // return arr;    
};

// Do not edit below this line
module.exports = removeFromArray;
