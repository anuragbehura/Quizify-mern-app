const express = require('express');
const { signup, login, verifyToken, getUser, refreshToken } = require('../controllers/controller');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', verifyToken, getUser);
// verify token

module.exports = router;


