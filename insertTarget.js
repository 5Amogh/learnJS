// Given a sorted array of integers, nums, and a target, 
// return the index of the target within nums.
// If it does not exist,  return the index of where target should be inserted.

// Ex: Given the following nums and target...

// nums = [1, 5, 8, 12], target = 12, return 3.
// Ex: Given the following nums and target...

// nums = [3, 4, 7, 12, 29], target = 5, return 2.
function findTarget(nums,target){
    let targetIndex = nums.findIndex(num => num === target);
    if(targetIndex > -1){
       return targetIndex
    }else{
        nums.push(target);
        console.log(nums)
        let targetInserted = [...nums].sort((a,b)=> a - b);
        console.log(targetInserted) // [ 12, 29, 3, 4, 5, 7 ] instead of [3, 4,5, 7, 12, 29] update - The reason the targetInserted array is logging [ 12, 29, 3, 4, 5, 7 ] instead of [3, 4, 5, 7, 12, 29] is because the sort() method by default sorts the elements as strings, not as numbers.
        return targetInserted.findIndex(num => num === target)
    }
}

console.log(findTarget([1,5,8,12],12))
console.log(findTarget([3,4,7,12,29],5))