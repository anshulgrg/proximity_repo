'use strict';

module.exports = function (app) {
    console.log("Inside router")
  app.use('/api', require('../app/commons/'));
};