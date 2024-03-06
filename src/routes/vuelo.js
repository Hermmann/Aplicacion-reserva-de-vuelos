const {Router} = require('express');
const router = Router();

const {createFlight} = require('../controllers/vuelo');
const {getFlights} = require('../controllers/vuelo');
const {getAbleFlight} = require('../controllers/vuelo');

router.post('/vuelo', createFlight);
router.get('/vuelo', getFlights);
router.get('/vuelo/disponible', getAbleFlight);

module.exports = router;