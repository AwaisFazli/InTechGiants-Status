const adminControllers = {};

// Controller to View Products:
adminControllers.viewProducts = (req, res) => {
  res.send("Show all the available products to admin");
};

// Controller to View Sellers
adminControllers.viewSellers = (req, res) => {
  res.send("Show all the available sellers to admin");
};

// Controller to View Pruchasers
adminControllers.viewPurchasers = (req, res) => {
  res.send("Show all the available purchasers to admin ");
};

// Controller to Restrict the Purchaser
adminControllers.restrictPurchaser = (req, res) => {
  res.send("restrict the particular purchaser from doing any activity");
};

// Controller to Restrict the Seller
adminControllers.restrictSeller = (req, res) => {
  res.send("restrict the particular Seller from doing any activity");
};

// Controller to Restrict the Product
adminControllers.restrictProduct = (req, res) => {
  res.send("restrict the particular product to be shown in the list");
};

// Controller to View Orders
adminControllers.viewOrders = (req, res) => {
  res.send("list down all of the Orders");
};

module.exports = adminControllers;
