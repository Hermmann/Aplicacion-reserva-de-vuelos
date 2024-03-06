const {Router} = require('express');
const router = Router();

const {getUsers} = require('../controllers/usuario');
const {creteUser} = require('../controllers/usuario')
const {updateUser} = require('../controllers/usuario');
const {deleteUser} = require('../controllers/usuario');

router.get('/user',getUsers);
router.post('/user', creteUser);
router.put('/user', updateUser);
router.delete('/user', deleteUser);




module.exports = router;