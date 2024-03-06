const {Router} = require('express');
const router = Router();

const {getUsers} = require('../controllers/index');
const {creteUser} = require('../controllers/index')
const {updateUser} = require('../controllers/index');

router.get('/user',getUsers);
router.post('/user', creteUser);
router.put('/user', updateUser);




module.exports = router;