const { supabase } = require("../supabase/client");



const creteUser = async (req, res ) => {
  try {
    const {nombre,email} = req.body;

    const {data, error} = await supabase
    .from('usuarios').insert([{nombre, email}]);
  
    if (error) {
      throw error;
    }
    res.status(200).send(data);
    
    //return data;
  } catch (error) {
    console.error('Error al crear un usuario');
  }

}

const getUsers = async (req, res) => {
    //res.send('users');
    try {
        const { data, error } = await supabase
          .from('usuarios')
          .select('*');
    
        if (error) {
          throw error;
        }
        //console.log("data", data);
        res.status(200).send(data);
        //return data;
      } catch (error) {
        console.error('Error al obtener los usuarios:', error.message);
        throw error;
      }
}



module.exports = {
    getUsers,
    creteUser,
}