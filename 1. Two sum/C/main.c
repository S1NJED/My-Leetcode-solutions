/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int numsSize, int target, int* returnSize){

    for (int index = 0; index < numsSize; index++) {
        int currentNumber = nums[index];
        int* myArray = (int*)malloc(2 * sizeof(int));

        for (int i = 0; i < numsSize; i++) {
            int nestedNumber = nums[i];

            if (index == i) { continue; }

            if ((currentNumber + nestedNumber) == target) {
                myArray[0] = index;
                myArray[1] = i;
                *returnSize = 2; // set the return size to 2
                
                return myArray;
            }
        }

        free(myArray);

    }    
    
    return NULL;
}