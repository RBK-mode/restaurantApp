const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

const auth = async(req, res, next) => {
    const token = req.header('auth').replace('Bearer ', '');
    const data = jwt.verify(token, process.env.JWT_KEY);
    try {
        const admin = await Admin.findOne({_id: data._id, 'tokens.token': token});
        if(!admin){
            throw new Error();
        }
        req.admin = admin;
        req.token = token;
        next();
    } catch(error) {
        res.status(401).send({error: 'sorry you are not authenticated'})
    }
}

module.exports = auth;