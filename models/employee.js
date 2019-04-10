'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    emp_name: DataTypes.STRING,
    emp_age: DataTypes.INTEGER,
    emp_address: DataTypes.STRING,
    emp_dept: DataTypes.STRING
  }, {});
  employee.associate = function(models) {
    // associations can be defined here
    employee.belongsTo(models.company,{foreignKey: 'id'});
  };
  return employee;
};
