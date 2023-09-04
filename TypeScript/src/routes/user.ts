const express = require('express');

// const userController = require('../controllers/user')

import {registerUser} from '../controllers/user'

const router = express.Router();


router.post('/register', registerUser);

export default  router;
