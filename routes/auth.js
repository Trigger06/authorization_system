const { Router } = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('config')
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const express = require('express');
const router = Router();

router.post(                                                                           // система регестрации
    '/register',
    [
        check('email', 'Invalid email adress').isEmail,
        check('password', 'The minimum password length is 8 characters')
            .isLength({ min: 8 }) // Если будет ошибка, то вставь параметр "options:"
    ],
    async (req, res) => {
        try {
            const error = validationResult(req);
            

            if (!error.isEmpty()) {
                return res.status(400).json({
                    error: error.array(),
                    message: 'Invalid data during registration'
                })
            }

            const { email, password } = req.body

            const candidate = await User.findOne({ email })

            if (candidate) {
                req.status(400).json({message: 'This adress is already in use'})
            }

            const hashedPassword = await bcrypt.hash(password, 12);          // хэширую пароли
            const user = new User({ email, password: hashedPassword });

            await user.sava();

            res.status(201).json({ message: "User created" })
    }
    catch (error) {
        res.status(500).json({message: "Something went wrong!"})
    }  
})

router.post(
    '/login',                                                                            // система авторизации
    [
        check('email', 'Enter the correct email!').normalizeEmail().isEmail(),         
        check('password', 'Check the password again!').exists()
    ],
    async (req, res) => {
    try {
        const error = validationResult(req);


        if (!error.isEmpty()) {
            return res.status(400).json({
                error: error.array(),
                message: 'Error logging in'                       
            })
        }

        const { email, password } = req.body;               // получаю от пользователя емайл и пароль

        const user = await User.findOne({ email })          // ищу в бд емайл

        if (!user) {
            return res.status(400).json({message: 'User not found!'})
        }

        const isMatch = await bcrypt.compare(password, user.password)          // сравниваю хэшпароли

        if (!isMatch) {
            res.status(400).json({message: 'Invalid password!'})
        }

        const token = (
            { userID: user.id },
            config.get('jwt'),
            {expiresln: '1h'}      // Время сеанса
        )

        res.status(100).json({ token, userID: user.id })         // если все ок
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong!" })
    }
    
})

module.exports = router;