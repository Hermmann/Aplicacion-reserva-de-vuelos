const { supabase } = require("../supabase/client");

const deleteReserva = async (req, res) => {
  try {
    const { reserva_id } = req.query;

    const { data, error } = await supabase
      .from('reservas')
      .delete()
      .eq('reservation_id', reserva_id);

    if (error) {
      res.status(500).json({ msg: 'Error en el servidor' });
      return;
    }

  
    
    res.status(200).json({ msg: 'Reserva eliminada correctamente' });
  } catch (error) {
    console.error('Error deleting reserva:', error.message);
    res.status(500).json({ msg: 'Error en el servidor' });
  }
}

const getReservas = async (req, res) => {
  //res.send('users');
  try {
      const { data, error } = await supabase
        .from('reservas')
        .select('*');
  
      if (error) {
        throw error;
      }
      //console.log("data", data);
      res.status(200).send(data);
      //return data;
    } catch (error) {
      console.error('Error al obtener las reservas:', error.message);
      throw error;
    }
}

const getReservarsById = async (req, res) => {
  try {
    const { reserva_id } = req.query;

    const { data, error } = await supabase.from('reservas')
    .select().eq('reservation_id', reserva_id);

    console.log(data);
    if (error) {
      res.status(500).json({ msg: 'Error en el servidor' });
      return; // Return early to prevent further execution
    }

    if (!data || data.length === 0) {
      res.status(404).json({ msg: 'Esa reserva no existe' });
      return; // Return early to prevent further execution
    }
    
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ msg: 'Error en el servidor' });
  }
}


//toca revisar bien este funcion
const createReservation = async (req, res) => {
  try {
    const {nombre, email, flight_id} = req.body

    // consigo el user_id
    const { data: userData, error: userError } = await supabase
      .from('usuarios')
      .select('user_id')
      .eq('nombre', nombre)
      .eq('email', email)
      .single();

      //console.log(nombre);

    if (userError || !userData) {
      
      res.status(404).json({msg:'Ese vuelo no existe'});
    }

    const userId = userData.user_id;

    
    const { data: flightData, error: flightError } = await supabase
      .from('vuelos')
      .select('disponible')
      .eq('flight_id', flight_id)
      .single();

    if (flightError || !flightData) {
      
      res.status(404).json({msg:'Ese vuelo no existe'});
    }

    const isAvailable = flightData.disponible;

    if (!isAvailable) {
      
      res.status(404).json({msg:'vuelo no disponible'});
    }

    // creo la reserva
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
      
      res.status(404).json({msg:'Error al crear reserva'});
    }

    console.log(reservationData);
    res.status(200).send(reservationData);
    //return reservationData;
  } catch (error) {
    //console.error('Error creating reservation:', error.message);
    //throw error;
    res.status(500).json({msg:'Error en servidor'});
  }
}


module.exports = {
  createReservation, 
  getReservarsById,
  getReservas,
  deleteReserva,
}
