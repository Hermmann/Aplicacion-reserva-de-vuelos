const { supabase } = require("../supabase/client");

const createFlight = async (req, res ) => {
    try {
      const {origen, destino, fecha_salida} = req.body;
  console.log(origen,destino,fecha_salida);
      const {data, error} = await supabase
      .from('vuelos').insert([{origen, destino,fecha_salida}]);
    
      if (error) {
        throw error;
      }
      res.status(200).send(data);
      
      //return data;
    } catch (error) {
      console.error('Error al crear un vuelo');
    }
  
  }


  module.exports = {
    createFlight,
  }