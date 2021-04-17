const express = require('express');
const ejs = require('ejs');
const { Sequelize, Model, DataTypes } = require('sequelize');

const indexRouter = require('./controllers/index');
const authRouter = require('./controllers/auth');

const userModel = require('./models/user');

// Инициализация подключения к базе данных
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'db/db.sqlite',
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./models/user.js');

const PORT = process.env.PORT || 3000;


// Models
/* const User = sequelize.define("user", {
	id: {
	  type: Sequelize.INTEGER,
	  autoIncrement: true,      // автоматически увеличивает значение для каждого нового поля
	  primaryKey: true,         // уникальный ключ
	  allowNull: false			// не допускается  нулевое значение 
	},
	name: {
	  type: Sequelize.STRING,
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

/* const Organization = sequelize.define("Organization", {
	id:{
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: true,
	},
}) */

/* User.belongsTo(Organization) */

// employers , organization , admin

sequelize.sync();

const app = express();

app.set("view engine", "ejs");

app.use('/', indexRouter);
app.use('/auth', authRouter)


app.get('/regg', (req,res) => {
	const newUser = db.users(sequelize, Sequelize)
	newUser.create({
		name: 'fdfdf',
		age: 22,
		educationRating: 2,
		address: 'fdfdfdfdf'
	});
	res.send('OK');
})

/* app.get('/reg', (req, res) => {
	User.create({
		name: "Tom",
		age: "30",
		educationRating: 3,
		address: "street"
	}).then(res => console.log(res))
	res.send('Hello')
})

*/

app.listen(PORT, () => {
	console.log('Server run. Port: '+ PORT);
})