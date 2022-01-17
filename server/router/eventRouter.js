const { Router } = require('express');
const eventRouter = new Router();
const eventController = require('../controller/eventController');

eventRouter.post('/', eventController.addEvent);
eventRouter.get('/', eventController.getEvent);

module.exports = eventRouter;
