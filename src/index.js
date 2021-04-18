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


\

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



app.listen(PORT, () => {
	console.log('Server run. Port: '+ PORT);
})