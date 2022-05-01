// To make an empty array
let arr = [];

// An array of strings
let colors = ['red', 'orange', 'yellow'];

// An array of numbers
let lottoNums = [19, 22, 56, 12, 51];

// A mixed array
let stuff = [true, 68, 'cat', null];

// Arrays are indexed: Each element has a corresponding index (counting starts at 0)
let colors2 = ['red', 'orange', 'green', 'yellow'];

colors2[0] = 'white';

colors2[2] = 'black';
colors2[3] = 'purple';

colors2[4]; // undefined
colors2[4] = 'blue';
// Output: ["red", "orange", "black", "purple", "blue"]