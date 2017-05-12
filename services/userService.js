angular
  .module("inventoryApp")
  .service("userService", function($http) {
    var _users = []
    var userId = 0;

    var User = function(id, firstName, lastName, email, phone, address1B, address2B, cityB, stateB, zipB, address1S, address2S, cityS, stateS, zipS, dob, number, expiration, security) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phone = phone;
      this.dob = dob;
      this.pastOrders = [];
      this.billingAddress = {
        address1B: address1B,
        address2B: address2B,
        cityB: cityB,
        stateB: stateB,
        zipB: zipB
      };
      this.shippingAddress = {
        address1S: address1S,
        address2S: address2S,
        cityS: cityS,
        stateS: stateS,
        zipS: zipS
      };
      this.creditCard = {
          number: number,
          expiration: expiration,
          security: security
      };
    }

    // Need to go back and seed your database with real info on 4-5 users.  Double check the order of info based on the user Constructor above.
    _users.push(new User(userId++, "Mary", "Mara", "mary.mara@gmail.com", "555-555-5555", "100 W. Main St.", "", "Costa Mesa", "CA", "92626", "101 W. Main St.", "", "Costa MESA", "WA", "95555", new Date("1983-02-14"), "123456789012345", new Date("2021-02-01"), "111"))

    _users.push(new User(userId++, "Frank", "Sanchez", "frank.sanchez@gmail.com", "666-666-6666", "200 W. Taft St.", "", "Orange", "CA", "92865", "311 E. Main st.", "", "Orange", "CA", "96666", new Date("1984-06-12"), "23456789086", new Date("2021-02-01"), "222"))

    _users.push(new User(userId++, "Phil", "Smith", "phil.smith@gmail.com", "777-777-7777", "300 W. Orange St.", "", "Irvine", "CA", "92222", "411 E. Elm st.", "", "Irvine", "CA", "92222", new Date("1984-06-12"), "23456789086", new Date("2021-02-01"), "222"))

    _users.push(new User(userId++, "Michael", "Scott", "mike.scott@gmail.com", "888-888-8888", "400 W. Glassell St.", "", "Scranton", "PA", "94444", "411 E. Glassell st.", "", "Scranton", "PA", "92222", new Date("1984-06-12"), "23456789086", new Date("2021-02-01"), "222"))


    this.getUsers = function() {
      return _users
    }

    this.getUserById = function(id) {
      if (id === undefined || id === "" || id === null) {
        var _user = {
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dob: "",
          pastOrders: [],
          billingAddress: {
            address1B: "",
            address2B: "",
            cityB: "",
            stateB: "",
            zipB: ""
          },
          shippingAddress: {
            address1S: "",
            address2S: "",
            cityS: "",
            stateS: "",
            zipS: ""
          },
          creditCard: {
              number: "",
              expiration: "",
              security: ""
          }
        }
        return _user
      }
      else {
        for (var i = 0; i < _users.length; i++) {
          if(_users[i].id == id) {
            return _users[i]
          }
        }
      }
    }

    this.addUser = function(firstName, lastName, email, phone, address1B, address2B, cityB, stateB, zipB, address1S, address2S, cityS, stateS, zipS, dob, number, expiration, security) {

      _users.push(new User(userId++, firstName, lastName, email, phone, address1B, address2B, cityB, stateB, zipB, address1S, address2S, cityS, stateS, zipS, dob, number, expiration, security))

    }

    this.updateUser = function() {

    }

    this.deleteUser = function() {

    }

})
