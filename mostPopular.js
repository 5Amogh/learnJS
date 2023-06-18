// Given a paragraph and a list of banned words, 
// return the most frequently occurring word that is not banned. 
// Treat words case insensitively and ignore punctuation.

// Ex: Given the following paragraph and list of banned words...

// paragraph = "The daily, the byte Daily.", banned = [“the”], return “daily”.

// This method has O(N^2)
// function mostPopular(paragraph,bannedList){
//     const paraArr = paragraph.toLowerCase().replace(/[^\w\s]/g, '').split(' ');
//     let globalArr = []
//     for(let i=0;i < paraArr.length;i++){
//         let tempArr = [];
//         for(let j=0; j < bannedList.length;j++){
//             if(bannedList[j] !== paraArr[i]){
//                 tempArr.push(paraArr[i])
//             }
//         }
//         if(tempArr.length > globalArr.length){
//             globalArr.push(paraArr[i])
//         }
//     }
//     return globalArr[0];
// }

function mostPopular(paragraph, bannedList) {
  const words = paragraph.toLowerCase().match(/\b\w+\b/g);
  let bannedSet = new Set(bannedList);
  let wordCounts = new Map();
  let maxCount = 0;
  let mostPopularWord = "";

  for (const word of words) {
    if (!bannedSet.has(word)) {
      const count = (wordCounts.get(word) || 0) + 1;
      wordCounts.set(word,count);

      if (count > maxCount) {
        maxCount = count;
        mostPopularWord = word;
      }
    }
  }
//   wordCounts['new'] = 5
//   console.log('new',wordCounts.get('new'))
//   console.log(wordCounts)
  return mostPopularWord;
}

console.log(mostPopular('The daily, the byte Daily.',['the']));
console.log(mostPopular('Bruce Wayne is the Batman, as bruce wayne and batman are never seen together',['bruce','wayne']));