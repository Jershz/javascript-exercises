const fibonacci = function(seq) {
    let arr = [0, 1];
    if(seq < 0) return "OOPS";
    seq = parseInt(seq);
    for(let i = 1; i < seq; i++ ) {
        arr.push(arr[i]+(arr[i-1]));
    }   
    return arr[seq];
};

// Do not edit below this line
module.exports = fibonacci;
