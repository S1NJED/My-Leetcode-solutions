var twoSum = function(nums, target) {

    for (let [index, currentNumber] of nums.entries()) {

        for (let [i, nestedNumber] of nums.entries()) {
            if (index == i) { continue; } 

            if ((currentNumber + nestedNumber) == target) {
                return [index, i];
            }
        }

    }

};