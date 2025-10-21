/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let curr = null;
    let i = 0;
    while (i<nums.length) {
        if (count===0) curr=nums[i];
        if (nums[i] === curr) count++;
        else count--;
        i++;
    }
    return curr
    
};