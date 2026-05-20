const reverseString = function(text) {
    let textArray = text.split("");
    textArray.reverse();
    return textArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
