// You are given an array of integers, 
// nums, that only contains values between one and nums.length (inclusive).
// Within nums, some values appear once and some values appear twice. 
// Return a list containing all numbers between one and nums.length that are missing.

// Ex: Given the following nums...

// nums = [1, 2, 3, 3], return [4].
// Ex: Given the following nums...

// nums = [3, 2, 4, 1, 5], return [].

function notIncluded(nums){
    let leftBehind = [];
    const numSet = new Set(nums)
    for(let i = 2; i <= nums.length;i++){
    //    if(!nums.includes(i)){
    //     leftBehind.push(i)      // O(N^2) as includes has O(N) time complexity
    //    }
        if(!numSet.has(i)){         // checking if a item exists in set has Big(O) of O(1)
            leftBehind.push(i)      // thus this solution gives us O(N) time complexity for whole operation
        }

    }
    return leftBehind
}

console.log(notIncluded([3,2,4,1,5])) //[]
console.log(notIncluded([1,2,3,3]))//[4]
console.log(notIncluded([1,2,3,3,4,6,6]))//[5,7]