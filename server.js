// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const path = require("path");
var express = require("express");
var fs = require("fs"); 


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
// middle ware for body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);
const apiRouter = require('./routes/apiRoutes');
const htmlRouter = require('./routes/htmlRoutes');
app.use('/api', apiRouter);
app.use('/', htmlRouter);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
