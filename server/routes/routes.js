const express = require('express');
const { signup, login, verifyToken, getUser } = require('../controllers/controller');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', verifyToken);
router.get('/user', verifyToken, getUser);


module.exports = router;


