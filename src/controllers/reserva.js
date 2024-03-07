const { supabase } = require("../supabase/client");

const createReservation = async (req, res) => {
  try {
    const {nombre, email, flight_id} = req.body

    // Step 1: Retrieve User ID
    const { data: userData, error: userError } = await supabase
      .from('usuarios')
      .select('user_id')
      .eq('nombre', nombre)
      .eq('email', email)
      .single();

      //console.log(nombre);

    if (userError || !userData) {
      throw new Error('User not found');
    }

    const userId = userData.user_id;

    // Step 2: Validate Flight Availability
    const { data: flightData, error: flightError } = await supabase
      .from('vuelos')
      .select('disponible')
      .eq('flight_id', flight_id)
      .single();

    if (flightError || !flightData) {
      throw new Error('Flight not found');
    }

    const isAvailable = flightData.disponible;

    if (!isAvailable) {
      throw new Error('Flight is not available');
    }

    // Step 3: Create Reservation
    const { data: reservationData, error: reservationError } = await supabase
      .from('reservas')
      .insert([
        {
          user_id: userId,
          flight_id: flight_id,
          fecha_reserva: new Date(),
          estado: 'aceptado' // Assuming the initial state is 'aceptado'
        }
      ]);

      console.log(reservationData);

    if (reservationError || !reservationData) {
      throw new Error('Error creating reservation');
    }
    console.log(reservationData);
    return reservationData;
  } catch (error) {
    console.error('Error creating reservation:', error.message);
    throw error;
  }
}


module.exports = {
  createReservation,
}