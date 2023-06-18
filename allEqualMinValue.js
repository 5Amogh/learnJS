// Given a non-empty integer array, nums,
// return the minimum number of moves to make all values in nums equal.
// A move consists of incrementing all but one element in the array by one.

// Ex: Given the following nums...

// nums = [1, 2, 3], return 3. [1, 2, 3] -> [2, 3, 3] -> [3, 4, 3] -> [4, 4, 4].

// function allEqual(nums){
//     let minValue = nums.sort((a,b) => a -b)[0];
//     let minMovesArr = []
//     for(let i = 1; i < nums.length; i++){
//         let difference = nums[i] - minValue;
//         minMovesArr.push(difference)
//     }
//     const minimumMovesRequired = minMovesArr.reduce((prev,curr) => prev + curr)
//     return minimumMovesRequired
// }

function allEqual(nums){
    const minValue = Math.min(...nums);
    const minimumMovesRequired = nums.reduce((total,num) => total + (num - minValue),0);
    return minimumMovesRequired
}

console.log(allEqual([1,2,3]))
console.log(allEqual([1,2,3,4]))
console.log(allEqual([1,2,3,4,5]))

