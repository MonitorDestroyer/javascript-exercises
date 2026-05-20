const repeatString = function(text, repeats) {
    if(repeats < 0) {
        return "ERROR";
    } else {
        let returnText = "";
        for(let i = 0; i < repeats; i++) {
            returnText = returnText.concat(text);
        }
        return returnText;
    }
};

// Do not edit below this line
module.exports = repeatString;
