/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    let index = 0;

    while (true) {
        let referenceLetter = strs[0][index];
        let count = 0;

        for (let i in strs) {
            let currentLetter = strs[i][index];

            if (referenceLetter && referenceLetter == currentLetter) {
                count++;
            }
        }

        if (count != strs.length) {
            return prefix;
        }
        else {
            prefix += referenceLetter;
        }

        index++;

    }
};