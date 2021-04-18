const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
	const Organization = sequelize.define("organization", {
		id: {
		  type: DataTypes.INTEGER,
		  autoIncrement: true,      // автоматически увеличивает значение для каждого нового поля
		  primaryKey: true,         // уникальный ключ
		  allowNull: false			// не допускается  нулевое значение
		},
		name: {
		  type: DataTypes.STRING,
		  allowNull: false
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true
		}
	});

	return Organization;
}