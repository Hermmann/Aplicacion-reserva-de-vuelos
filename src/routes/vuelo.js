const {Router} = require('express');
const router = Router();

const {createFlight} = require('../controllers/vuelo');

router.post('/vuelo', createFlight);

module.exports = router;