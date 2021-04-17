const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define("user", {
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
		age: {
		  type: Sequelize.INTEGER,
		  allowNull: false
		},
		verified: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
	
		},
		educationRating: {
			type: DataTypes.INTEGER(3), 
			allowNull: true
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true
		}
	});

	return User;
}


/* const seq = require('sequelize');
const { DataTypes, Model } = require('sequelize');

class User extends Model {
	
}
User.init({
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
	  age: {
		type: Sequelize.INTEGER,
		allowNull: false
	  },
	  verified: {
		  type: DataTypes.BOOLEAN,
		  allowNull: false,
		  defaultValue: false
  
	  },
	  educationRating: {
		  type: DataTypes.INTEGER(3), 
		  allowNull: true
	  },
	  address: {
		  type: DataTypes.STRING,
		  allowNull: true
	  }
})

/* const User = seq.define("user", {
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
	age: {
	  type: Sequelize.INTEGER,
	  allowNull: false
	},
	verified: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false

	},
	educationRating: {
		type: DataTypes.INTEGER(3), 
		allowNull: true
	},
	address: {
		type: DataTypes.STRING,
		allowNull: true
	}
}); */