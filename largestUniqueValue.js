// Given an integer array, nums,
// return the largest unique value in nums.

// Ex: Given the following nums…

// nums = [4, 9, 2, 9], return 4.
// Ex: Given the following nums…

// nums = [8, 1, 10, 1, 4, 8, 4, 10], return -1.


// this implementation has sorting which has O(n log n) time complexity
// function largestUniqueValue(nums){
//     const sortedArr = nums.sort((a,b) => b - a)
//     let maxValue = -1;
//     for(let i = 0 ; i < nums.length; i++){
//         if(sortedArr[i] !== sortedArr[i-1] && 
//            sortedArr[i] !== sortedArr[i+1]){
//             if(sortedArr[i] > maxValue){
//                 maxValue = sortedArr[i]
//             }
//         }
//     }
//     return maxValue
// }

// Best Case
function largestUniqueValue(nums){
    let countMap = new Map();
    let maxCount = -1;
    for(const num of nums){
        countMap.set(num,(countMap.get(num) || 0) + 1)
    }

    for(const [num,count] of countMap.entries()){
        if(count === 1 && num > maxCount){
            maxCount = num
        }
    }

    return maxCount

}

console.log(largestUniqueValue([4,9,2,9]))
console.log(largestUniqueValue([8,1,10,1,4,8,4,10]))
console.log(largestUniqueValue([8,1,10,1,4,4,10]))