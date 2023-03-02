var twoSum = function(nums, target) {

    for (let [index, currentNumber] of nums.entries()) {

        for (let [i, nestedNumber] of nums.entries()) {
            if (index == i) { continue; } 

            if ((currentNumber + nestedNumber) == target) {
                return [index, i];
            }
        }

    }

<<<<<<< HEAD
};
=======
};
>>>>>>> 1258a7131e8877ef8766450a4ee87b77e616ee52
