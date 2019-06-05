var mysqlConn = require("./db");

var Provider = function(provider) {
  this.name = user.name;

  this.email = provider.email;
  this.password = provider.password;
  this.propertiesOwned = provider.propertiesOwned;

};

Proivder.createProvider = function(newProvider, result) {
  mysqlConn.query("INSERT INTO provider set ?", newProvider, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

module.exports = Provider;
