// Given an array of integers, nums, 
// every value appears three times except one value which only appears once.
// Return the value that only appears once.

// Ex: Given the following array nums…

// nums = [1, 2, 2, 2, 3, 3, 3], return 1.
// Ex: Given the following array nums…

// nums = [3, 3, 2, 5, 2, 2, 5, 3, 9, 5], return 9.

function oneValue(nums){
    let numsCountMap = new Map();
    let oneUniqueValue;
    for(const num of nums){
        numsCountMap.set(num,(numsCountMap.get(num) || 0) + 1);
    };

   numsCountMap.forEach((value,key) => {
        if(value === 1){
            oneUniqueValue = key;
            return 
        }
    })

    return oneUniqueValue;

}

console.log(oneValue([1,2,2,2,3,3,3]))
console.log(oneValue([3,3,2,5,2,2,5,3,9,5]))