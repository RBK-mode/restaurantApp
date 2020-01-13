const express = require('express');
const Admin = require('../models/Admin');
const auth = require('../middleware/adminAuth');

const router = express.Router();

//admin signup route
router.post('/', async (req, res) => {
    try{
        const admin = new Admin(req.body);
        await admin.save();
        const token = await admin.generateAuthToken();
        res.status(201).json({admin, token});
    }catch(err){
        res.status(400).send(err);
    }
});

//admin login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findByCredentials(email, password);
        if(!admin) {
            return res.status(401).send({error: 'Sorry You are not Authenticated'});
        }
        const token = await admin.generateAuthToken();
        res.send({admin, token});
    } catch (err) {
        console.log(err)
        res.status(400).send();
    }
});

router.get('/me', auth, async (req, res) => {
    res.send(req.admin);
});

router.post('/me/logout', auth, async (req, res) => {
    try {
        req.admin.tokens = req.admin.tokens.filter((token) => {
            return token.token != req.token;
        });
        await req.user.save();
        res.send();
    } catch(error) {
        res.status(500).send();
    }
});

module.exports = router;