'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Blogs', 'author', Sequelize.STRING).then(function() {
      return queryInterface.addColumn('Blogs', 'topic', Sequelize.STRING).then(function() {
        return queryInterface.addColumn('Blogs', 'content', Sequelize.STRING)
      })
    });

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('Blogs', 'author').then(function() {
      return queryInterface.removeColumn('Blogs', 'topic').then(function() {
        return queryInterface.removeColumn('Blogs', 'content')
      })
    });
  }
};
