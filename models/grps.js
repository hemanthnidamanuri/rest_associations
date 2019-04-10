'use strict';
module.exports = (sequelize, DataTypes) => {
  const grps = sequelize.define('grps', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    admin: DataTypes.STRING
  }, {});
  grps.associate = function(models) {
    // associations can be defined here
    grps.belongsToMany(models.user, {through: 'groupusers', as: 'users', foreignKey: 'grpId'});
  };
  return grps;
};
