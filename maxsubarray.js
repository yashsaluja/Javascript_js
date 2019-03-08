//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

//Example:

//Input: [-2,1,-3,4,-1,2,1,-5,4],
//Output: 6
//Explanation: [4,-1,2,1] has the largest sum = 6.


var maxSubArray = function(nums) {
    
	    var maxSum = -10000;
	    var currentSum = 0;
	    for (let i = 0; i < nums.length; i++) {
	        if (nums[i] == 0) {
	            continue;
	        }
	        currentSum = currentSum+nums[i];
	        maxSum = Math.max(currentSum, maxSum);
	        if (currentSum < 0) {
	            currentSum = 0;
	        }
	    }
	    
	    return maxSum;
	}
    
