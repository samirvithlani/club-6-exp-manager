const router = require('express').Router();
const userController = require('../controller/UserController');
router.post('/user', userController.creaetUser);
router.post('/login', userController.loginUser);
module.exports = router;