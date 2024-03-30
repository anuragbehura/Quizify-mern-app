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


const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists. Please login instead." });
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, 10); // 10 is the salt rounds

        // Create a new user
        const user = new User({
            name: name,
            email: email,
            password: hashedPassword,
        });

        // Save the user to the database
        await user.save();

        return res.status(201).json({ message: "User created successfully.", user: user });
    } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email: email });

        if (!existingUser) {
            return res.status(404).json({ message: "User not found. Please sign up." });
        }

        const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Create a JSON Web Token
        const expires = Date.now() + 1000 * 60 * 60 * 24 * 30; // 30 days
        const token = jwt.sign({ id: existingUser._id, expires }, JWT_SECRET_KEY);

        // Set the cookie
        res.cookie("cookies", token, {
            path: '/',
            expiresIn: expires,
            httpOnly: true,
            sameSite: 'lax',
            secure: NODE_ENV === "production",
        });

        return res.status(200).json({ message: 'Successfully logged in.', });     /*user: existingUser, token*/
    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ message: "Internal server error." });
    }
};


const verifyToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    const token = cookies.split("=")[1];
    if (!token) {
        return res.status(400).json({ message: "No token found" });
    }

    jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: "Token expired" });
            } else if (err.name === 'JsonWebTokenError') {
                return res.status(401).json({ message: "Invalid token" });
            } else {
                return res.status(500).json({ message: "Internal server error" });
            }
        }
        console.log(user)
        req.id = user.id;
    });
    next();
};


const getUser = async (req, res, next) => {
    try {
        const userId = req.id;

        // console.log(userId)
        // Attempt to find the user in the database
        const user = await User.findById(userId, "-password");

        // If no user found, send a 404 response
        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }

        // If user found, send it as a JSON response
        return res.status(200).json({ message: user });
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


const logout = async (req, res) => {
    try {
        // Clear the session or authentication cookie
        // await req.session.destroy();
        res.clearCookie('cookies');

        // Optionally, you can send a success message
        return res.status(200).json({ message: 'Logout successful' });
    } catch (err) {
        console.error('Error logging out:', err);
        return res.status(500).json({ error: 'Failed to log out' });
    }
}


const checkAuth = (req, res) => {
    // Assuming req.user contains the user information
    console.log(req.id);
    // You might want to send some user-related data back to the client
    res.status(200).json({ user: req.id });
};


const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Generate a unique token for password reset
        const tokenUUID = uuidv4(); // You need to implement this function

        // Store the token in the database along with the user
        user.resetPasswordToken = tokenUUID;
        user.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour
        await user.save();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: EMAIL_PASS
            }
        });

        const resetLink = `http://localhost:5173/resetPassword/${tokenUUID}`;
        const mailOptions = {
            from: EMAIL,
            to: email,
            subject: 'Reset Password',
            html: `<p>Please click <a href="${resetLink}">here</a> to reset your password.</p>`
        };

        await transporter.sendMail(mailOptions);
        return res.json({ status: true, message: "Email sent" });
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({ message: "Error sending email" });
    }
}



// const resetPassword = async (req, res) => {
//     const { tokenUUID } = req.params;
//     const { password } = req.body;

//     try {
//         // Verify token
//         const decoded = ;
//         const userId = decoded.id;

//         // Hash the new password
//         const hashedPassword = await bcrypt.hash(password, 10); // Using async bcrypt.hash

//         // Update user's password
//         await User.findByIdAndUpdate(userId, { password: hashedPassword });

//         // Send success response
//         return res.status(200).json({ success: true, message: "Password updated successfully." });
//     } catch (err) {
//         // Handle token verification error or database error
//         console.error("Password reset error:", err);
//         return res.status(400).json({ success: false, message: "Invalid token or error occurred." });
//     }
// };

const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
        // Find user by reset token
        const user = await User.findOne({ resetPasswordToken: token });
        if (!user) {
            return res.status(404).json({ success: false, message: "Invalid or expired token." });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update user's password and clear the reset token
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        // Send success response
        return res.status(200).json({ success: true, message: "Password updated successfully." });
    } catch (err) {
        console.error("Password reset error:", err);
        return res.status(500).json({ success: false, message: "Internal server error." });
    }
};



exports.signup = signup;
exports.login = login;
exports.logout = logout;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.checkAuth = checkAuth;
exports.forgotPassword = forgotPassword;
exports.resetPassword = resetPassword;

