const express = require('express');
const routes = express.Router();

const StoreController = require('./app/controller/StoreController');

const ParamsMiddlewares = require('./app/middleware/params');

routes.post('/V1/stores', StoreController.register);

routes.use(ParamsMiddlewares);

routes.get('/V1/stores', StoreController.index);

module.exports = routes;