const sumAll = function(a, b) {
    if(typeof(a) == "number" && typeof(b) == "number") {
        if(a % 1 != 0 || b % 1 != 0) {
            return "ERROR";
        }
        if(a < 0 || b < 0) {
            return "ERROR";
        }

        let smaller = 0;
        let larger = 0;

        if(a <= b) {
            smaller = a;
            larger = b;
        } else {
            smaller = b;
            larger = a;
        }

        let sum = 0;

        for(let i = smaller; i <= larger; i++) {
            sum += i;
        }

        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
