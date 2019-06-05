var mysqlConn = require("./db");

var Property = function(property) {
  this.location = property.location;
  this.price = property.price;
  this.provider = property.provider;

};

Property.createProperty = function(newProperty, result) {
  mysqlConn.query("INSERT INTO provider set ?", newProperty, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

module.exports = Property;
