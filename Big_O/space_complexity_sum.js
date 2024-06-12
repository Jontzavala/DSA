function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

/* No matter what the length of the array is we always have one variable named total with one number, 
and then we have another declaration inside on for loop with i = 0, thats another number.

So the space complexity is constant O(1)
*/
