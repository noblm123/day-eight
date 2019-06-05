// var user = {
//     firstname: "Miki"
// };

// var User = function(firstname) {
//     this.firstname = firstname;
// }
// var user = User("Miki");

// class User {
//     constructor(firstname) {
//         this.firstname = firstname;
//     }
// }
// var user = new User("Miki");

var mysqlConn = require("./db");

var User = function(user) {
  this.name = user.name;
//   this.surname = user.surname;
//   this.cellPhone = user.cellPhone;
  this.email = user.email;
  this.password = user.password;
  this.role = user.role;
//   this.date_created = new Date();

  //   this.createUser = function(data, result) {

  //   }
};

User.createUser = function(newUser, result) {
  mysqlConn.query("INSERT INTO user set ?", newUser, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

/////

// var user = User({
//     name: "Miki"
// });
// User.createUser(user, (err, createdId) => {

// });

module.exports = User;
