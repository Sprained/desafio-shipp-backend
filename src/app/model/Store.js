const Sequelize = require('sequelize');
const { Model } = Sequelize;

class Store extends Model{
    static init(sequelize){
        super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            county: Sequelize.STRING,
            license_number: Sequelize.STRING,
            operation_type: Sequelize.STRING,
            establishment_type: Sequelize.STRING,
            entity_name: Sequelize.STRING,
            dba_name: Sequelize.STRING,
            street_number: Sequelize.STRING,
            street_name: Sequelize.STRING,
            city: Sequelize.STRING,
            state: Sequelize.STRING,
            zip_code: Sequelize.STRING,
            lat: Sequelize.STRING,
            long: Sequelize.STRING,
        },{
            sequelize
        });
    }
}

module.exports = Store;