const Sequelize = require('sequelize');
const { Model } = Sequelize;

class Log extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            date: Sequelize.DATE,
            lat: Sequelize.STRING,
            long: Sequelize.STRING,
            status_code: Sequelize.INTEGER,
            store_number: Sequelize.INTEGER
        },{
            sequelize
        });
    }
}

module.exports = Log;