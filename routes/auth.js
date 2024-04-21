//let's say auth stands fot authentication, login information, ..etc.
const router = require('express').Router()
const User = require('../models/User')

//Register
//we're gonna take information from the client side
router.post('/register', async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    
    try{
        const user = await newUser.save();
        res.status(200).json({
            status:true,
            data: user,
        });
        // res.send('hey its user route mira').json(user);
    } catch(err){
        res.status(500).json({
            error: err,
            status: false,
        })
    }
});

// router.post('/register',(req,res)=>{
//     res.send('hey its user route mira')
// })

module.exports = router
