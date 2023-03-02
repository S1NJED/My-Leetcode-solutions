/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    let romanNumerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let result = 0;

    for (let index = 0; index < s.length; index++) {
        let symbol = s[index];
        let previousNumeral = romanNumerals[ s[index - 1] ];
        let currentNumeral = romanNumerals[symbol];

        if (currentNumeral > previousNumeral) {
            result -= previousNumeral;
            result += (currentNumeral - previousNumeral);
        }
        else {
            result += currentNumeral;
        }

        console.log(index, symbol, currentNumeral, result);
    }

    return result;

};

let string = "MCMXCIV";
console.log(romanToInt(string));