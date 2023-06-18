// Given an integer array, nums that represents the score of a spelling bee’s contestants, 
// return string array that represents each of their respective placings.

// Ex: Given the following nums…

// nums = [3, 1, 4, 2, 5], return ["Bronze Medal","5","Silver Medal","4","Gold Medal"].

// function medals(nums){
//     let sortedArr = [...nums].sort((a,b)=> b - a);
//     let sendNum = [...nums]
//     let placings = {};
//     for(const [key,value] of sortedArr.entries()){
//         if(key < 3){
//             if(key+1 == 1){
//                 placings[value] = 'Gold Medal'
//             }
//             if(key+1 == 2){
//                 placings[value] = 'Silver Medal'
//             }
//             if(key+1 == 3){
//                 placings[value] = 'Bronze Medal'
//             }
//         }else{
//             placings[value] = `${key+1}`;
//         }  
//     }

//     // const placingsFinal = Object.fromEntries(Object.entries(placings).map(([key,value])=> [value,key]))
//     nums.forEach((num,index) => {
//         sendNum[index] = placings[`${num}`] 
//     })
//     return sendNum
// }

function medals(nums) {
    const sortedArr = [...nums].sort((a, b) => b - a);
    const placings = {};
  
    sortedArr.forEach((value, index) => {
      if (index < 3) {
        const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
        placings[value] = medals[index];
      } else {
        placings[value] = `${index + 1}`;
      }
    });
  
    const sendNum = nums.map(num => placings[num]);
  
    return sendNum;
}  
console.log(medals([3, 1, 4, 2, 5])) //[ 'Bronze Medal', '5', 'Silver Medal', '4', 'Gold Medal' ]
console.log(medals([6, 8, 0, 1, 3, 4])) //['Silver Medal','Gold Medal','6','5','4','Bronze Medal']