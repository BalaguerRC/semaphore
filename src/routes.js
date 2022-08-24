const express = require('express');
const routes = express.Router();

const semaphoreController = require('./controllers/semaphoreController');
const crossingController = require('./controllers/crossingController');
const viaController = require('./controllers/viaController');

routes.get('/semaphores/stop', semaphoreController.stop)

module.exports = routes;