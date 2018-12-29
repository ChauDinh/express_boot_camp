const express = require("express");
const app = express();

// you need to call next if you want to go next step
const myFooMiddleware = (req, res, next) => {
 if (!req.query.foo) return next();

 return res.json({ foo: parseInt(req.query.foo) + 1 });
};

// a middleware is just a function that runs before the action handler
app.get("/", myFooMiddleware, (req, res) => {
 res.json({ foo: 1 });
});