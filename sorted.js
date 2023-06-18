function sorted(str){
    let unsorted = str.split('')
    let sortedArr = []
    for(let i = 0;i <unsorted.length;i++ ){
        let current = unsorted[i]
        console.log(current)
        if(i !== 0){
            let previous = unsorted[i-1]
            if(previous.localeCompare(current) > 0){
                sortedArr.push(current)
            }
        }else{
            sortedArr.push(current)
        }
       
    }
    return (unsorted.length - sortedArr.length)
}

console.log(sorted('abcb')) //output:1
console.log(sorted('vwzyx')) //output:2