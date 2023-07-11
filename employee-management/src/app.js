const express = require('express');
const app = express();
const employeeRoutes = require('./employee/employee.routes');

app.use('/api/employees', employeeRoutes);

const port = 1234;

app.listen(port, () => {
  console.log(`Server is up and running on port number ${port}`);
});
