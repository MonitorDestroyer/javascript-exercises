const removeFromArray = function(args, ...toRemove) {
    for(let i = 0; i < args.length; i++) {
        if(toRemove.includes(args[i])) {
            args.splice(i, 1);
            i--;
        }
    }

    return args;
};

// Do not edit below this line
module.exports = removeFromArray;
