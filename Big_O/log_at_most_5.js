function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

logAtMost5(6);

// Big O of this would be O(1) because the curve will flatten out at 5.
