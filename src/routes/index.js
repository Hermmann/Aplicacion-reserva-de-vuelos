const {Router} = require('express');
const router = Router();

const {getUsers} = require('../controllers/index');

router.get('/user',getUsers);




module.exports = router;