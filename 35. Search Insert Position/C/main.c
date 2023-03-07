int searchInsert(int* nums, int numsSize, int target){
    
    int left = 0;
    int right = numsSize - 1;
    int index = 0;

    while (index < numsSize) {
        int leftValue = nums[left];
        int rightValue = nums[right];
        
        if (leftValue == target || rightValue == target) {
            return leftValue == target ? left: right;
        }
        else if (leftValue > target) {
            break;
        }
        
        left++;
        right--;
        index++;
    }
    
    return index;
}