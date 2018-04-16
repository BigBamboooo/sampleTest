const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./models');
const apiRoutes = require('./app/routes/apiRoutes.js');

//If you are deploying in the server, then you need this proccess.env.PORT is mandatory.
const PORT = process.env.PORT || 3000;

//set up the express app to handle data parsing..
//without this api call's won't work..
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.text());
app.use(bodyparser.json({ type: "application/vmd.api+json" }));

//static library
app.use(express.static("app/public"));

apiRoutes(app, db);
db.sequelize.sync().then(function () {
    app.listen(3000, function () {
        console.log(`Listerning on Port:+ ${PORT}`);
    });
})

