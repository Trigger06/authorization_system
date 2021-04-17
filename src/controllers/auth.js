const router  = require('express').Router();
const bodyPar = require('body-parser');
const userModel = require('../models/user');
const urlencodedParser = bodyPar.urlencoded({extended: false});


router.get('/', (req, res) => {
	res.render('formaStud')
});



router.post('/login', urlencodedParser, (req, res) =>{
    console.log(req.body.userEmail);
    res.send('fds')

    
})

router.post('/reg', urlencodedParser, (req, res) =>{
    const userEmail = req.body.userEmail
    const userPassword = req.body.userPassword;

    //const { userEmail, userPassword } = req.body;

    res.status(200);

    
})
module.exports = router;