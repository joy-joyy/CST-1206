const express = require('express');

const app = express();
const PORT = 4000;
const employee = [
    {
        "Name" : "Daniel",
        "employeeId": 100,
        "Email" : "daniel@gmail.com",
        "Department" :"IT"
    }
];

// Telling express that the data i am getting is of type JSON
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get('/', (req, res) => {
    res.send("Welcome to Employee APIs!");
})

// We are trying to get employees data from the server
app.get('/employee', (req, res) => {
    // For get requests we give 200 success response
    // const data = res.status(200);
    // return data.json(employee);

    return res.status(200).json(employee);
})


// Example to POST json data via curl
// curl -X POST -H "content-type:application/json" -d {\"Name\":\"Sam\",\"employeeId\":999,\"Email\":\"sam@gmail.com\",\"Department\":\"Finance\"} http://localhost:4000/employee
app.post('/employee', (req, res) => {
    const employeeData = req.body;
    console.log(employeeData);
    employee.push(employeeData);

    // 201 is used when you are trying to create a resource and send success response
    return res.status(201).json(employee);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
