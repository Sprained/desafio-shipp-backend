'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('logs', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      date: {
        type: Sequelize.DATE
      },
      lat: {
        type: Sequelize.STRING
      },
      long: {
        type: Sequelize.STRING
      },
      status_code: {
        type: Sequelize.INTEGER
      },
      store_number: {
        type: Sequelize.INTEGER
      }
    })
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('stores');
  }
};
