const sellerControllers = {};

// Controller to Signup for Seller
sellerControllers.Signup = (req, res) => {
  res.send("Seller Signup");
};

// Controller to Signin for Seller
sellerControllers.Signin = (req, res) => {
  res.send("Seller Signin");
};

// Controller to Create Sellers Products
sellerControllers.createProduct = (req, res) => {
  res.send("Seller Create Products");
};

// Controller to edit Sellers own Products
sellerControllers.editProduct = (req, res) => {
  res.send("Edit Particular Product");
};

// Controller to View Sellers own Orders
sellerControllers.viewOrders = (req, res) => {
  res.send("Sellers Orders");
};

// Controller to View Sellers own Products
sellerControllers.viewProduct = (req, res) => {
  res.send("Sellers Products");
};

// Controller to edit Sellers own Order Status
sellerControllers.editOrderStatus = (req, res) => {
  res.send("Change Status of Particular Product");
};

module.exports = sellerControllers;
