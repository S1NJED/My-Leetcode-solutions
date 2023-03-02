class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for index in range(0, len(nums)):
            currentNumber = nums[index]

            for i in range(0, len(nums)):
                nestedNumber = nums[i]
                if index == i:
                    continue
                    
                if (currentNumber + nestedNumber) == target:
                    return [index, i]