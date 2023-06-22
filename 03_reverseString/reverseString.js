const reverseString = function(str) {
    let strArr = str.split("");

    let strReverse = strArr.reverse().join("");
    return strReverse;
};

// Do not edit below this line
module.exports = reverseString;
