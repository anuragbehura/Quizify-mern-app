const express = require('express');
const { signup, login, verifyToken, getUser, checkAuth, logout, forgotPassword, resetPassword } = require('../controllers/controller');
const authentication = require('../middleware/authentication');


const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword)
router.post('/reset-password/:token', resetPassword)
router.get('/logout', logout)
router.get('/user', verifyToken, getUser);
router.get('/protected', authentication, checkAuth) // verify user

module.exports = router;


