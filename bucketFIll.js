// You are Given an image represented as a matrix. 
// Each value in the matrix represents the color of an individual pixel.
// Given a new color represented as an integer and a starting row and column, 
// transform every adjacent pixel to the starting pixel that has the same color to the new color.
// Note: This is effectively implementing a “bucket fill” in a software like Microsoft paint.

// Ex: Given the following image, row, column, and color…

// image = [
//   [0,1,1],
//   [0,1,0],
//   [1,1,1]
// ], row = 1, column = 1, color = 3 modify image to be as follows...
// image = [
//   [0, 3, 3],
//   [0, 3, 0],
//   [3, 3, 3],
// ].

//this one has quadratic time complexity
// function colorFill(imageMatrix,modification){
//     const adjacent = new Map();
//     adjacent.set('left',imageMatrix[modification.row-1][modification.column-2]);
//     adjacent.set('right',imageMatrix[modification.row-1][modification.column]);
//     // adjacent.set('top',imageMatrix[modification.row][modification.column-1]);
//     // adjacent.set('bottom',imageMatrix[modification.row+1][modification.column-1]);
//     for(let image of imageMatrix){
//         for(let [index,color] of image.entries()){
//             if(adjacent.get('left') === color || adjacent.get('right') === color){
//                 image[index] = modification.color
//             }
//         }
//     }
//     return imageMatrix
// }

// suggested  by chatGPT with some modifications but either way this does not solve the problem like the previous method that i have done.
// function colorFill(imageMatrix, modification) {
//     const startColor = imageMatrix[modification.row - 1][modification.column - 1];
//     const neighbours = new Map();
//     neighbours.set('left',imageMatrix[modification.row-1][modification.column-2]);
//     neighbours.set('right',imageMatrix[modification.row-1][modification.column]);
//     const numRows = imageMatrix.length;
//     const numCols = imageMatrix[0].length;
  
//     const queue = [];
//     const visited = new Set();
  
//     queue.push([modification.row - 1, modification.column - 2]);
//     queue.push([modification.row - 1, modification.column]);
//     queue.push([modification.row + 1, modification.column -2]);
//     queue.push([modification.row + 1, modification.column]);

//     // Perform BFS
//     while (queue.length > 0) {
//       const [row, col] = queue.shift();
  
//       if (row >= 0 && row < numRows && col >= 0 && col < numCols) {
//         // Check if the pixel has been visited
//         const pixelKey = `${row},${col}`;
//         if (!visited.has(pixelKey)) {
//             if(imageMatrix[row][col] !== startColor){
//             visited.add(pixelKey);
//             imageMatrix[row][col] = modification.color;
//             queue.push([row, col-1]);
//             queue.push([row, col+1]);
//           }
//         }
//       }
//     }
  
//     return imageMatrix;
//   }
  
function colorFill(imageMatrix,modification){
    const startColor = imageMatrix[modification.row - 1][modification.column - 1];

    
    
    return imageMatrix
}
const image = [
    [0,1,1],
    [0,1,0],
    [1,1,1]
]

const image2 = [
    [0,1,1,1],
    [0,1,0,0],
    [1,1,1,1],
    [1,0,0,1]

]

const modifyImage = {
    row:1,
    column:1,
    color:3
}

const modifyImage2 = {
    row:2,
    column:2,
    color:5
}

console.log(colorFill(image,modifyImage))
console.log(colorFill(image2,modifyImage2))