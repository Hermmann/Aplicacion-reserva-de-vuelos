const {Router} = require('express');
const router = Router();

const {getReservas} = require('../controllers/reserva');
const {createReservation} = require('../controllers/reserva');
const {getReservarsById} =require('../controllers/reserva');
const {deleteReserva} = require('../controllers/reserva');

router.delete('/reservas', deleteReserva);
router.post('/reservas', createReservation);
router.get('/reservas', getReservas);
router.get('/reservas/id', getReservarsById);

module.exports = router;