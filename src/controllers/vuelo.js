const { supabase } = require("../supabase/client");

const getAbleFlight = async (req, res) => {
  try {
    //const {disponible} = req.query;
    let x = true;
    const { data, error} = await supabase
    .from('vuelos').select().eq('disponible', true);

    
    
    if (error) {
      throw error;   
    }
  
    res.status(200).send(data);
    
  } catch (error) {
    console.error('Error al obtener los vuelos:', error.message);
    //res.status(500).json({message: "Error al obtener los vuelos"});
    throw error;
  }
}

const getFlights = async (req, res) => {
    
    try {
        const { data, error } = await supabase
          .from('vuelos')
          .select('*');
    
          console.log(data);
        if (error) {
          throw error;
          //res.status(400).json({message: "Error"});
        }
        //console.log("data", data);
        res.status(200).send(data);
        //return data;
      } catch (error) {
        console.error('Error al obtener los vuelos:', error.message);
        res.status(500).json({message: "Error al obtener los vuelos"});
        throw error;
      }
}

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
    getFlights,
    getAbleFlight,
  }