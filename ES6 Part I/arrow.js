

function sum(a, b) {
    return a + b;
}

// The above example can be written in arrow function as below

const sum2 = (a, b) => {
    return a + b;
}


// The above example can be written in arrow function in single line

const sum3 = (a, b) =>  a + b;

// *******************************************************************

// Function Expresion

const sum4 = function(a, b) {
    return a + b;
}

console.log("sum(2, 3) = " + sum(2, 3));
console.log("sum2(2, 3) = " + sum2(2, 3));
console.log("sum3(2, 3) = " + sum3(2, 3));
console.log("sum4(2, 3) = " + sum4(2, 3));


// String Literals


let myName = "Daniel";
let myCollege = "VCC";

console.log("Hi my name is " + myName + " and I study in " + myCollege);


//  We can write the above as using string literals

console.log(`Hi my name is ${myName} and I study in ${myCollege}`);



