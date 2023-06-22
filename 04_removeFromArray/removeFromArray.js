const removeFromArray = function(arr, ...args) {
    const filtered = arr.filter((elem) => !(args.includes(elem)));
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
