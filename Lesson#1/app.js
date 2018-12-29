const express = require('express');
const app = express();


/* 
. GET is how we fetch data from server   
. It is the way we tell the server the we only want to "GET" something
*/

app.get("/", (req, res) => {
 res.json({ foo: 1 });
});

module.exports = app;