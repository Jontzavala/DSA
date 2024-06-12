function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

/*
Space complexity here is O(n) because the newArr is going to grow to whatever size the input is.
*/
