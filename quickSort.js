function quickSort(array) {
 if (array.length <= 1) {
  return array;
 }

 let pivotIndex = Math.floor(array.length / 2);
 let pivot = array[pivotIndex];
 let left = [];
 let right = [];

 for (let i = 0; i < array.length; i++) {
  if (i !== pivotIndex) {
   if (array[i] < pivot) {
    left.push(array[i]);
   } else {
    right.push(array[i]);
   }
  }
 }

 return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort([1, 8, 9, 6, 45, 7, 3, 98]));
