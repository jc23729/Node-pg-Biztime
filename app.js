/** BizTime express application. */


const express = require("express");

const app = express();
const ExpressError = require("./expressError")

app.use(express.json());


/** 404 handler */

app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});

/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});


module.exports = app;

// Step 0: Setup
// Create a project folder, a Git repo, and a package.json
// Install express and pg via NPM
// Add node_modules to .gitignore

// To run data.sql
// type in psql in terminal 