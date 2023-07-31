const purchaserControllers = {};

// Controller for Purchaser Signup
purchaserControllers.Signup = (req, res) => {
  res.send("Purchaser Signup");
};

// Controller for Purchaser Signin
purchaserControllers.Signin = (req, res) => {
  res.send("Purchaser Signin");
};

// Controller for Purchaser to View All Products
purchaserControllers.viewProducts = (req, res) => {
  res.send("Get All The products");
};

// Controller to send Products in Cart
purchaserControllers.addProductToCart = (req, res) => {
  res.send("Add Products to the Cart");
};

// Controller to view Products available in Cart
purchaserControllers.viewCartProducts = (req, res) => {
  res.send("Show the products available in cart");
};

// Controller for Purchaser to Checkout
purchaserControllers.checkout = (req, res) => {
  res.send("Checkout via Stripe");
};

// Controller to View Order List
purchaserControllers.viewOrders = (req, res) => {
  res.send("get purchasers");
};

module.exports = purchaserControllers;
