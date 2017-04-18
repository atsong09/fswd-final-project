'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Blogs', 'UserId', Sequelize.INTEGER);
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('Blogs', 'UserId');
  }
};
