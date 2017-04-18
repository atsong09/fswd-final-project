'use strict';
module.exports = function(sequelize, DataTypes) {
  var Blog = sequelize.define('Blog', {
    title: {
      type: DataTypes.STRING,
      unique: true
    },
    author: {
      type: DataTypes.STRING,
      unique: false
    },
    topic: {
      type: DataTypes.STRING,
      unique: false
    },
    content: {
      type: DataTypes.STRING,
      unique: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      unique: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Blog.belongsTo(models.User)
      }
    }
  });
  return Blog;
};
