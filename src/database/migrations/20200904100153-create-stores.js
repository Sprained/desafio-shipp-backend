'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('stores', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      county: {
        type: Sequelize.STRING
      },
      license_number: {
        type: Sequelize.STRING
      },
      operation_type: {
        type: Sequelize.STRING
      },
      establishment_type: {
        type: Sequelize.STRING
      },
      entity_name: {
        type: Sequelize.STRING
      },
      dba_name: {
        type: Sequelize.STRING
      },
      street_number: {
        type: Sequelize.STRING
      },
      street_name: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip_code: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.STRING
      },
      long: {
        type: Sequelize.STRING
      },
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('stores');
  }
};
