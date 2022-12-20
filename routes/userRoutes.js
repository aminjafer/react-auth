const express = require('express');
const router = express.Router();
const { registerUser, getUser, loginUser } = require('../controllers/userController');

router.post('/',registerUser);
router.post('/login', loginUser);
router.post('/user', getUser);

module.exports = router;
