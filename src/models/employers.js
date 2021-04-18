const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
	const Employers   = sequelize.define("employers", {
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
		verified: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
	    },
		address: {
			type: DataTypes.STRING,
			allowNull: true
		}
	});

	return Employers;
}