angular
  .module("inventoryApp")
  .controller("userController", function($scope, $state, $stateParams, userService) {

    // Looking to see what paramiters are being passed through the HTTP strings
    //  If its not a reserved keyword (in this case 'new', then it will log it in the console.)
    console.log($stateParams.id);

    // runs getUsers() inside of our userService which returns a users array
    $scope.users = userService.getUsers()
    console.log($scope.users);

    $scope.user = userService.getUserById($stateParams.id)
    console.log($scope.user);

    // Checking the state params to see if we are either creating a new user (in which case there is no ID) or updating an existing user (in which case $stateParams.id is equal to a value)
    if ($stateParams.id === undefined || $stateParams.id === "" || $stateParams.id === null) {
      $scope.userHeading = "Create a New User!"
      $scope.submitButton = true;
      $scope.saveButton = false;
    }
    else {
      $scope.userHeading = "Update User!"
      $scope.submitButton = false;
      $scope.saveButton = true;
    }

      $scope.addUser = function() {
        userService.addUser($scope.user.firstName, $scope.user.lastName, $scope.user.email, $scope.user.phone, $scope.user.billingAddress.address1B, $scope.user.billingAddress.address2B, $scope.user.billingAddress.cityB, $scope.user.billingAddress.stateB, $scope.user.billingAddress.zipB, $scope.user.shippingAddress.address1S, $scope.user.shippingAddress.address2S, $scope.user.shippingAddress.cityS, $scope.user.shippingAddress.stateS, $scope.user.shippingAddress.zipS, $scope.user.dob, $scope.user.creditCard.number, $scope.user.creditCard.expiration, $scope.user.creditCard.security)
      }

      var currentUserIndex = null;

      // Save User updates the changes that were made to the user inside of the user input fields.
      $scope.saveUser = function() {

        userService.updateUser()

        $scope.users.splice(currentUserIndex, 1, new User($scope.id, $scope.firstName, $scope.lastName, $scope.address1B, $scope.address2B, $scope.cityB, $scope.stateB, $scope.zipB, $scope.address1S, $scope.address2S, $scope.cityS, $scope.stateS, $scope.zipS, $scope.dob, $scope.number, $scope.expiration, $scope.security))

      }

      // Delete User removes the user from the array entirely
      $scope.deleteUser = function(user) {
        userService.deleteUser()

        for (var i = 0; i < $scope.users.length; i++) {
          if($scope.users[i] ==  user) {
            $scope.users.splice(i,1)
          }
        }

      }

  })
