const express = require("express");

const app = express();

app.listen(3000, () => console.log("Hello world"));

const User = require("./api/user");
const Provider = require("./api/provider");
const Property = require("./api/property");
const Booking = require("./api/booking");

var newUser = {
    name: "Mark",
    role: "Admin",
    email: "email@email.com",
    password: "password"
};
User.createUser(newUser, (err, result) => {
    console.log(err);
    console.log(result);
});

app.post("/api/user", (req, res) => {
    const user = req.body;
    User.createUser(user, (err, result) => {
        console.log(err);
        console.log(result);
        return res.status(200).json({id: result});
    });
});

var newProvider = {
    name: "Mark",
    propertiesOwned: "3",
    email: "email@email.com",
    password: "password"
};
User.createProvider(newProvider, (err, result) => {
    console.log(err);
    console.log(result);
});

app.post("/api/provider", (req, res) => {
    const provider = req.body;
    Provider.createProivder(provider, (err, result) => {
        console.log(err);
        console.log(result);
        return res.status(200).json({id: result});
    });
});

var newProperty = {
    location: "Lisbon",
    price: "300",
    provider: "provider"
};
Property.createProperty(newProperty, (err, result) => {
    console.log(err);
    console.log(result);
});

app.post("/api/bookings", (req, res) => {
    const bookings = req.body;
    Bookings.createBookings(bookings, (err, result) => {
        console.log(err);
        console.log(result);
        return res.status(200).json({id: result});
    });
});

var newBookings = {
    location: "Lisbon",
    price: "300",
    consumer: "user - consumer",
    provider: "user - provider"
};
Property.createProperty(newBookings, (err, result) => {
    console.log(err);
    console.log(result);
});

app.post("/api/property", (req, res) => {
    const bookings = req.body;
    Bookings.createBookings(bookings, (err, result) => {
        console.log(err);
        console.log(result);
        return res.status(200).json({id: result});
    });
});