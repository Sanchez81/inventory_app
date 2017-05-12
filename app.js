var app = angular.module("inventoryApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "indexController"
    })

    // Users
    .state("users", {
      url: '/users',
      templateUrl: "./views/users_index.html",
      controller: "userController"
    })
      .state("newUser", {
        url: '/users/new',
        templateUrl: "./views/users_form.html",
        controller: "userController"
      })
      .state("showUser", {
        url: '/users/:id',
        templateUrl: "./views/users_show.html",
        controller: "userController"
      })
      .state("editUser", {
        url: '/users/:id/edit',
        templateUrl: "./views/users_form.html",
        controller: "userController"
      })

})



// var orders = []
// var products = []
//
// var Order = function(id, userId) {
//   this.id;
//   this.products = [];
//   this.buyer = userId;
//   this.totalPrice = function() {
//     var price = 0
//     for (var i = 0; i < this.products.length; i++) {
//       price += this.products[i].price
//     }
//     return price
//   };
//   this.totalWeight = function() {
//     var weight = 0
//     for (var i = 0; i < this.products.length; i++) {
//       weight += this.products[i].stats.weight
//     }
//     return weight
//   }
// }
// var Product = function(id, name, notes, description, price, height, width, weight, image, quantity) {
//   this.id = id;
//   this.name = name;
//   this.notes = notes;
//   this.description = description;
//   this.price = price;
//   this.stats = {
//     height: height,
//     width: width,
//     weight: weight
//   };
//   this.image = image;
//   this.quantity = quantity;
//   this.inStock = function() {
//     return this.quantity > 0
//   }
// }
// var productId = 0
// products.push(new Product(productId++, "Oceanside", "Lime Verbena", "Lorem Ipsum", 12, 2, 2, 3, null, 10))
// products.push(new Product(productId++, "Long Beach", "Musk", "Lorem Ipsum", 20, 2, 2, 4, null, 15))
// var orderId = 0
// var newOrder = new Order(orderId++, 1)
// newOrder.products[newOrder.products.length] = products[0]
// newOrder.products[newOrder.products.length] = products[0]
// newOrder.products[newOrder.products.length] = products[1]
// console.log(newOrder.totalPrice());
// console.log(newOrder.totalWeight());
