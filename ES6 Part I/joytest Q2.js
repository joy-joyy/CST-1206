console.log("Program starts");

// please note that "Array" != "array"
// Array is Library
// array is vaiable name

// Use from() and() keys generate the array
console.log(Array.from(Array(10).keys()));
// output [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Use filter() to select items with value > 5 
console.log(Array.from(Array(10).keys()).filter((v) => v > 5));
// output [6, 7, 8, 9, 10]


// Use filter() to select items with value not inside array (small capitals)
let array = [ 4, 5, 2, 1, 0 ];
console.log(Array.from(Array(10).keys()).filter((v) => array.indexOf(v) < 0));
// output [ 3, 6, 7, 8, 9 ]


// write a function by replacing 10 with variable 'n'
function missingNumber(array, n) {
    return Array.from(Array(n).keys()).filter((v) => array.indexOf(v) < 0)
}

// Testing the function
console.log(missingNumber([2, 1, 0, 3, 7, 6, 4, 5, 10, 9], 10));
