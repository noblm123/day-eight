var mysqlConn = require("./db");

var User = function(user) {
  this.name = user.name;

  this.email = user.email;
  this.password = user.password;
  this.role = user.role;

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

module.exports = User;
