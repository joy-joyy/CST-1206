console.log("Hello World222!!!");

let student = [
    {
    name: "Daniel",
    email: "daniel@gmail.com",
    marks: [80, 60, 50, 70, 95]
    },
    {
    name: "Mark",
    email: "mark@gmail.com",
    marks: [99, 40, 84, 72, 60]
    },
    {
    name: "Stacy",
    email: "stacy@gmail.com",
    marks: [8, 30, 11, 0, 20]
    },
    {
    name: "Geri",
    email: "geri@gmail.com",
    marks: [100, 99, 95, 85, 99]
    }
    ];

console.log("===== Original Array : student =====");
console.log(student);

let student_with_total = student.map((s) => {
    s.totals = s.marks.reduce((a, b) => a + b, 0);
    return s;
})

console.log("===== Array : student_with_total =====");
console.log(student_with_total);


function studentWithHighestMarks(array1) {

    /****
    // Step 1: Add a field called "totals"
    let array2 = array1.map((s) => {
        s.totals = s.marks.reduce((a, b) => a + b, 0);
        return s;
    })

    // Step 2: Return the student with max totals
    return array2.reduce(function(prev, current) {
        return (prev.totals > current.totals) ? prev : current
    }) 
    ****/

    // Advance: You can merge step 1 and step 2 above in one line
    return array1
        .map((s) => {
            s.totals = s.marks.reduce((a, b) => a + b, 0);
            return s;
        })
        .reduce((prev, current) => {
            return (prev.totals > current.totals) ? prev : current
        }) 
 
  }

console.log("===== Function: studentWithHighestMarks =====");
console.log(studentWithHighestMarks(student))



