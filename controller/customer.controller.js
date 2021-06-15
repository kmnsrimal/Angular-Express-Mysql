const Customer = require("../model/customer.model");
console.log("create customer controller");
// Create and Save a new Customer
module.exports.create = (req, res) => {
  console.log("exports.create");
    // Validate request
    // const data = req.body.data;
    console.log(req.body);
    // console.log(data);
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const customer = new Customer({
      email: req.body.email,
      name: req.body.name,
      active: req.body.active
    });
  
    // Save Customer in the database
    Customer.create(customer, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };