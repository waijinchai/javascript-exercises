const fibonacci = function(n) {
    if (n < 0) return "OOPS"

    memo = Array(Number(n)+1).fill(-1);
    memo[0] = 0;
    memo[1] = 1;

    const fibAux = function(n, memo) {
        if (memo[n] !== -1) {
            return memo[n];
        }

        memo[n] = fibAux(n-1, memo) + fibAux(n-2, memo);
        return memo[n];
    }

    return fibAux(n, memo)
};

// Do not edit below this line
module.exports = fibonacci;
