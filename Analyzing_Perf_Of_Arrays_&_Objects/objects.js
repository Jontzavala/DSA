let instructor = {
  firstname: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

/*
Big O of Objects

Insertion -> O(1)
Removal -> O(1)
Searching -> O(N)
Access -> O(1)

searching an object is O(N) because we'd have to check each value for the keys which grows with however many keys there are.

*/
/*
Big O of Object Methods

Object.keys -> O(N)
Object.values -> O(N)
Object.entries -> O(N)
instructor.hasOwnProperty("firstName") -> O(1) returns true or false that's why it's constant.

*/
