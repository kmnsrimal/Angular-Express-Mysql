const express = require('express');
const CustomerController = require('../controller/customer.controller');

const indexRouter1 = express.Router();

// indexRouter.get('/customers',CustomerController.findAll);
// indexRouter.post('/customers',CustomerController.create(req,res));
 
indexRouter1.get("/customers", (req, res) => {
    console.log(req.body);
    CustomerController.findAll(req,res);
});

indexRouter1.post("/customers", (req, res) => {
    console.log(req.body);
    CustomerController.create(req,res); 
});
 
module.exports = indexRouter1;

// module.exports = app => {
//     const customers = require("../controller/customer.controller");
  
//     // Create a new Customer
//     app.post("/customers", customers.create);
  
//     // Retrieve all Customers
// app.get("/customers", (req, res) => {
//   customers.findAll(req,res);
// });
//     // Retrieve a single Customer with customerId
//     app.get("/customers/:customerId", customers.findOne);
  
//     // Update a Customer with customerId
//     app.put("/customers/:customerId", customers.update);
  
//     // Delete a Customer with customerId
//     app.delete("/customers/:customerId", customers.delete);
  
//     // Create a new Customer
//     app.delete("/customers", customers.deleteAll);
//   };