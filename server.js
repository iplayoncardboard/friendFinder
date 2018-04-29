//Dependencies
const express = require('express');
const body = require('body-parser')
const path = require('path');

// Convenience Variables
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(body.urlencoded({ extended: true }));
app.use(body.json());


//routes
require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);


//Listener 
app.listen(PORT, ()=>{
    console.log('Game Group Finder server listening on port '+PORT);
});
