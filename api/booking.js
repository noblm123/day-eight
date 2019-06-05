var mysqlConn = require("./db");

var Bookings = function(bookings) {
  this.location = bookings.location;
  this.price = bookings.price;
  this.consumer = bookings.consumer
  this.provider = bookings.provider;

};

Bookings.createBookings = function(newBookings, result) {
  mysqlConn.query("INSERT INTO provider set ?", newBookings, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

module.exports = Bookings;
