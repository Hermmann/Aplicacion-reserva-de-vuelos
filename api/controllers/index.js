const { supabase } = require("../supabase/client");



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
    getUsers
}