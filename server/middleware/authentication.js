const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const refresh = async (req, res, next) => {
    const cookies = req.headers.cookie;
    const prevToken = cookies.split("=")[1];


    if (!prevToken) {
        return res.status(404).json({ message: "No token found" });
    }
    jwt.verify(String(prevToken), JWT_SECRET_KEY, (error, user) => {
        if(error) {
            return res.status(400).json({ message: "Invalid token" })
        }
        res.clearCookie(String(user.id)); // clear the prevToken

        const token = jwt.sign({ id: user.id }, JWT_SECRET_KEY, {
            expiresIn: "35s",
        });

        res.cookie(String(user.id), token, {
            path: "/",
            expiresIn : new Date(Date.now() + 1000 * 35),
            httpOnly: true,
            sameSite: "lax",
        });

        req.id = user.id;
    }); 
    next();

};


exports.refresh = refresh;
