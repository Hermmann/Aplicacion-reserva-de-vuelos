const {Router} = require('express');
const router = Router();

const {getUsers} = require('../controllers/index');
const {creteUser} = require('../controllers/index')

router.get('/user',getUsers);
router.post('/user', creteUser);



module.exports = router;