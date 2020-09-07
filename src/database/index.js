const sequelize = require('sequelize');

const databaseConfig = require('../config/database');

const Store = require('../app/model/Store');
const Log = require('../app/model/Log');

const models = [Store, Log];

class Database{
    constructor(){
        this.init();
    }

    init(){
        this.connection = new sequelize(databaseConfig);

        models
        .map(model => model.init(this.connection));
    }
}

module.exports = new Database();