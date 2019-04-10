'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    comp_name: DataTypes.STRING,
    comp_address: DataTypes.STRING,
    comp_chairperson: DataTypes.STRING
  }, {});
  company.associate = function(models) {
    // associations can be defined here
    company.hasMany(models.employee, {foreignKey: 'id'});
  };
  return company;
};
