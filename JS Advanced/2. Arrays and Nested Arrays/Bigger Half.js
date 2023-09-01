function solve(arr) {
    arr.sort((a, b) => a - b);
    
     if (arr.length % 2 == 0) {
         let middleIndex = arr.length / 2;
         let elements = arr.slice(middleIndex);
         return elements;
     }
     else {
         let middleIndex = Math.floor(arr.length / 2);
         let elements = arr.slice(middleIndex);
         return elements;
     }
 }