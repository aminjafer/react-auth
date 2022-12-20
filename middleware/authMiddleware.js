const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //Extract the token fron the header
            token = req.header.authorization.split(' ')[1];

            //Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            //Get user from the token provided
            req.user = await User.findById(decoded.id).select('-password');

        } catch (error) {

        }
    }
});