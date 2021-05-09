'use strict';


let util = require('util');
let express = require('express');
let http = require('http');
let app = express();
let router = express.Router();
let path = require('path');


app.use(express.json());

// Reading env variables
global.env = process.env.NODE_ENV || 'local';
app.set('port', process.env.PORT || 8080);
global.appRoot = path.resolve(__dirname);
//console.log(global.env);
//db setup
let mysql_conn = require('./dbmanager/mysql/connection.js');
mysql_conn.setup();
//console.log("sql setup" ,global.pool);

app.use(router);
require('./router/')(router);

console.log("breakpoint1");

app.use('*', function(req, res) {
  res.status(404).send("Page not found!");
});

console.log("breakpoint2");
// Fetch default connectwise agent id
(async () => {
    try {
        // run code on startup
        console.log("Run on startup");
    } catch (e) {
        console.log("Error occurred while fetching API user id in app.js", e);
    }
})();

var server = http.createServer(app)
  .on('error', function(err) {
    util.log(err);
    process.exit(1);
  })
  .listen(app.get('port'), function() {
    util.log('Effy Server listening on port ' + app.get('port') + ' in ' + (process.env.NODE_ENV));
  });