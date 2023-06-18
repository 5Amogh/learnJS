// You are a thief trying to steal from houses in a neighborhood. 
// The amount of money that can be stolen from the ith house is represented by nums[i]. 
// While you’d like to steal from all the houses, 
// if adjacent houses are broken into, the police are notified via a security system. 
// Return the largest amount of money you can steal without alerting the police.
// Note: You may not modify nums.
// Ex: Given the following nums...

// nums = [1, 3, 2, 5, 2], return 8.

function largestTheft(houses){
    let largestTheft = 0;
    for(let house = 0; house<houses.length; house++){
        let theft = houses[house];
        for(let i=2; i < houses.length; i +=2){
            // if(houses[house-i]){
                // theft += houses[house-i] || 0
            // }
            // if(houses[house+i]){
                // theft += houses[house+i] || 0
            // }
            theft += (houses[house-i] || 0) + (houses[house+i] || 0)
        }
        if(theft > largestTheft){
            largestTheft = theft
        }
    }
    return largestTheft
}

console.log(largestTheft([1,3,2,5,2])) //8
console.log(largestTheft([1,3,2,5,2,7,0,0,9,11])) //26
