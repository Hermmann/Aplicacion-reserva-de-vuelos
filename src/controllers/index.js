const { supabase } = require("../supabase/client");

const creteUser = async (req, res ) => {
  try {
    const {name} = req.body;

    const {data, error} = await supabase
    .from('users').insert([{name}]);

    if (error) {
      throw error;
    }
    
    return data;
  } catch (error) {
    console.error('Error al crear un usuario');
  }

}

const getUsers = async (req, res) => {
    //res.send('users');
    try {
        const { data, error } = await supabase
          .from('users')
          .select('*');
    
        if (error) {
          throw error;
        }
        console.log("data", data);
        return data;
      } catch (error) {
        console.error('Error al obtener los usuarios:', error.message);
        throw error;
      }
}



module.exports = {
    getUsers,
    creteUser,
}