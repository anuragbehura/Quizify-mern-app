const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid')
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const NODE_ENV = process.env.NODE_ENV;
const EMAIL = process.env.EMAIL;
const EMAIL_PASS = process.env.EMAIL_PASS;


const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    let existingUser;

    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        console.log(err)
    }
    if (existingUser) {
        return res
            .status(400)
            .json({ message: "User already exists! Login Instead" })
    }
    const hashedPassword = bcrypt.hashSync(password);

    const user = new User({
        name: name,
        email: email,
        password: hashedPassword,
    });

    try {
        await user.save();
    } catch (error) {
        console.log(error)
    }

    return res.status(201).json({ message: user })
};

const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email })
    } catch (err) {
        return new Error(err);
    }
    if (!existingUser) {
        return res.status(400).json({ message: "User not found. Signup please" })
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Invaild Email / Password' })
    }
    // create a json web token
    const expires = Date.now() + 1000 * 60 * 60 * 24 * 30;
    const token = jwt.sign({ id: existingUser._id, expires }, JWT_SECRET_KEY);

    // set the cookie
    res.cookie("Authorization", token, {
        path: '/',
        expires: new Date(expires),
        httpOnly: true,
        sameSite: 'lax',
        secure: NODE_ENV === "production",
    })

    return res
        .status(200)
        .json({ message: 'Successfully Logged In', user: existingUser, token })
};

const verifyToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    const token = cookies.split("=")[1];
    console.log(token);
    if (!token) {
        res.status(404).json({ message: "No token found" })
    }
    jwt.verify(String(token), JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(400).json({ message: "Invaild Token" })
        }
        console.log(user.id);
        req.id = user.id;
    });
    next();
};

// const user = new User({
//     name: name,
//     email: email,
//     password: hashedPassword,
// });

const getUser = async (req, res, next) => {
    const userId = req.id;
    try {
        // Attempt to find the user in the database
        const user = await User.findById(userId, "-password");

        // If no user found, send a 404 response
        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        // If user found, send it as a JSON response
        return res.status(200).json({ user });
    } catch (err) {
        // If an error occurs during the database operation
        console.error("Error in getUser:", err);

        // Check for specific error types
        if (err.name === 'CastError') {
            // Handle invalid user ID
            return res.status(400).json({ message: "Invalid User ID" });
        }

        // For other errors, send a generic error response
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


const logout = (req, res) => {
    res.clearCookie("Authorization");
    res.sendStatus(200);
}

const checkAuth = (req, res) => {
    console.log(req.user);
    res.status(200);
}


const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const cookies = req.headers.cookie;
        const token = cookies.split("=")[1];
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: EMAIL_PASS
            }
        });

        const mailOptions = {
            from: EMAIL,
            to: email,
            subject: 'Reset Password',
            text: `http://localhost:5173/resetPassword/${token}`
        };

        await transporter.sendMail(mailOptions);
        return res.json({ status: true, message: "Email sent" });
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({ message: "Error sending email" });
    }
}

const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
    } catch (err) {
        console.log(err)
    }
}

exports.signup = signup;
exports.login = login;
exports.logout = logout;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.checkAuth = checkAuth;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;

