const jwt = require('jsonwebtoken');
const User = require('../model/User')
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

async function authentication(req, res, next) {
    try  {
        const token = req.cookies.Authorization.split("=")[1];

        const decoded = jwt.verify(token, JWT_SECRET_KEY);

        const user = await User.findById(decoded.id);


        if (!user) {
            return res.sendStatus(401);
        }
        req.user = user;
    } catch(err){
        res.status(401).json({ error: 'Unauthorized' });
    }

}

module.exports = authentication;