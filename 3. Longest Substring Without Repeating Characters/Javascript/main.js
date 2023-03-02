var lengthOfLongestSubstring = function(s) {
    

    let output = 0;
    let previousLetter = "";
    let arrayLetters = [];
    let index = 0;

    for (let letter of s) {
        index++;
        if (index == 1 && s.length > 1 || index == s.length) { continue; }
        
        if (letter != previousLetter && arrayLetters.indexOf(letter) == -1) {
            output++;
            arrayLetters.push(letter);

        }
        previousLetter = letter;

    }
    
    return output;

};

let string = '" "';
console.log(lengthOfLongestSubstring(string));