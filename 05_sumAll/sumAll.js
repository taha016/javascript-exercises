const sumAll = function(st, end) {
    if(st > end) {
        st = st + end;
        end = st - end;
        st = st - end;
    }
    if(st < 0 || end < 0) return "ERROR";

    if(!Number.isInteger(st) || !Number.isInteger(end)) return "ERROR";
    let finalSum = 0;
    for(let i = st; i <= end; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
