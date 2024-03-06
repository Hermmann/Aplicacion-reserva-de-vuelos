const {Router} = require('express');
const router = Router();

const {getUsers} = require('../controllers/usuario');
const {creteUser} = require('../controllers/usuario')
const {updateUser} = require('../controllers/usuario');
const {deleteUser} = require('../controllers/usuario');

router.get('/usuario',getUsers);
router.post('/usuario', creteUser);
router.put('/usuario', updateUser);
router.delete('/usuario', deleteUser);




module.exports = router;