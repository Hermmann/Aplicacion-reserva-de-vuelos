const {Router} = require('express');
const router = Router();

const {createReservation} = require('../controllers/reserva');

router.post('/reservas', createReservation);

module.exports = router;