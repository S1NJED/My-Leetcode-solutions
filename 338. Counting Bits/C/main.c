/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

int* countBits(int n, int* returnSize){
    int *array = (int *)malloc((n + 1) * sizeof(int)); 
    
    for (int index = 0; index <= n; index++) {
        int count = 0;
        int number = index;

        while (number) {
            count += (1 & number);
            number = number >> 1;
        }

        array[index] = count;

    }

    *returnSize = n + 1;
    return array;

}