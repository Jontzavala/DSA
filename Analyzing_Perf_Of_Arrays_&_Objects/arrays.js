let name = ["Michael", "Melissa", "Andrea"];

/*
Big O of Arrays

Insertion -> It depends...
Removal -> It depends...
Searching -> O(N)
Access -> O(1)

Insertion explained:
When pushing a new element to an Array the Big O is O(1).
When adding an element to the beginning of an array is where things get messed up.
You have to re-index all the elements of the array so it's O(N)

Removing explained:
Removing from the begininning will also cause you to have to reindex the elements of the array.

So push and pop are always faster than shift and unshift
*/

/*
YOU DON'T NEED TO MEMORIZE THIS!!
Big O of Array Operations

push -> O(1)
pop -> O(1)
shift -> O(N)
unshift -> O(N)
concat -> O(N)
slice -> O(N)
splice -> O(N)
sort -> O(N * log N)
forEach/map/filter/reduce/etc -> O(N)
*/
