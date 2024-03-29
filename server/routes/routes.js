const express = require('express');
const { signup, login, verifyToken, getUser, logout, forgotPassword, resetPassword } = require('../controllers/controller');
const { refresh } = require('../middleware/authentication');



const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword)
router.post('/reset-password/:token', resetPassword)
router.post('/logout', logout)
router.get('/user', verifyToken, getUser);
router.get('/refresh', refresh ,verifyToken, getUser) // verify user

module.exports = router;


