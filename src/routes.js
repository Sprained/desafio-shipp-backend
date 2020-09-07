const express = require('express');
const routes = express.Router();

const StoreController = require('./app/controller/StoreController');

const ParamsMiddlewares = require('./app/middleware/params');

routes.post('/store', StoreController.register);

routes.use(ParamsMiddlewares);

routes.get('/store', StoreController.index);

module.exports = routes;