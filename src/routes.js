const express = require('express');
const routes = express.Router();

const semaphoreController = require('./controllers/semaphoreController');


routes.get('/semaphores/stop', semaphoreController.stop)

module.exports = routes;