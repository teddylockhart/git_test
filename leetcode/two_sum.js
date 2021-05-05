var twoSum = function(nums, target) {
    console.log(nums, target)
    
    // for loop to look at each number in the array for first value [0-3]
    for (let i = 0; i < nums.length - 1; i++) {
    
    // capture value from each for loop
        let firstValue = nums[i];
    
    // for loop to look at each number in the array for second value added [1-3]
        for (let q = i + 1; q < nums.length; q++) {
            let secondValue = nums[q];
    // add both values. if true, return each index that add up to target value
            if (firstValue + secondValue === target)
                return [i, q];
        }   
    }
};