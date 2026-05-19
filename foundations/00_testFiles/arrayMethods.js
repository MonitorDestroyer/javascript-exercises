function camelize(text) {
    const textArray = text.split("");
    let camelArray = [];
    let capitalizeNext = false;
    for(let char of textArray) {
        if(char == "-") {
            capitalizeNext = true;
        } else if(capitalizeNext) {
            camelArray.push(char.toUpperCase());
            capitalizeNext = false;
        } else {
            camelArray.push(char);
        }
    }
    return camelArray.join("");
}

function camelizeSolution(text) {
    return text.split("-")
        .map((word, index) => {
            if(index == 0 || word == "") {
                return word;
            } else {
                return word[0].toUpperCase() + word.slice(1);
            }
        })
        .join("");
}

