'use strict';
module.exports = (sequelize, DataTypes) => {
  const groupusers = sequelize.define('groupusers', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    grpId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'grps',
        key: 'id'
      }
    }
  }, {});
  groupusers.associate = function(models) {
    // associations can be defined here
  };
  return groupusers;
};
