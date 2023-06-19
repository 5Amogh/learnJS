// Given a sorted integer array, nums,
// remove duplicates from the array in-place such that each element only appears once.
// Once you’ve removed all the duplicates, return the length of the new array.
// Note: The values you leave beyond the new length of the array does not matter.

// Ex: Given the following nums…

// nums = [1, 2, 2, 4, 4, 6, 8, 8], return 5.
// Ex: Given the following nums…

// nums = [1, 2, 3, 3], return 3.

// NOTE:
// "Array in-place" refers to modifying or manipulating an array without using additional memory or creating a new array. In other words, the changes are made directly within the existing array without allocating extra space.
// When solving a problem or task that requires an array to be modified in-place, it typically means that you should update the original array itself rather than creating a new array with the desired modifications.
// In the context of removing duplicates from a sorted integer array in-place, it means that you should modify the given array directly by rearranging its elements, without using additional data structures like sets or creating a new array to store the unique elements.

//If the problems was just to give final length of unique values we could have used used new set for unique values and spread those in an array and return that length.


function removeDuplicates(nums) {
  let uniqueIndex = 0;
  for(let i = 1; i < nums.length; i++){
    if(nums[i] !== nums[uniqueIndex]){
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }
  nums.length = uniqueIndex + 1;
  return nums.length;
}

console.log(removeDuplicates([1,2,2,4,4,6,8,8]));
console.log(removeDuplicates([1,2,3,3]));

// Uses Two-Pointer approach (Specifically Fast and Slow approach)
