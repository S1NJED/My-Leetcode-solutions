/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = ( nums1.concat(nums2) ).sort((a, b) => a - b);
    let mergedArrayLength = mergedArray.length;

    return ( mergedArrayLength % 2 ) === 1 ? mergedArray[ Math.floor(mergedArrayLength / 2) ] : ( mergedArray[mergedArrayLength / 2] + mergedArray[ (mergedArrayLength / 2) - 1 ]) / 2 ;
};