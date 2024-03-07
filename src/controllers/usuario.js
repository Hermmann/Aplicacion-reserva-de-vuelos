const { supabase } = require("../supabase/client");

const deleteUser = async (req, res) => {
  try {
    const { user_id, email } = req.query;

    if (user_id && email) {
      //console.log(email);
      const { data, error } = await supabase
        .from('usuarios')
        .delete()
        .or(`user_id.eq.${user_id},email.eq.${email}`);

      if (error) {
        throw error;
      }
      
      //return data;
      res.status(200).json({msg:  'Usuarion eliminado correctamente'});
    } else if (user_id) {
      const { data, error } = await supabase
        .from('usuarios')
        .delete()
        .eq('user_id', user_id);
        console.log("data",data);
      if (error) {
        throw error;
      }

      //return data;
      res.status(200).send(data);
    } else if (email) {
      console.log(email);
      const { data, error } = await supabase
        .from('usuarios')
        .delete()
        .eq('email', email);

      if (error) {
        throw error;
      }

      //return data;
      res.status(200).send(data);
    } else {
      throw new Error('Please provide either user_id or email');
    }

    
  } catch (error) {
    res.status(500).json({message: "Error en el servidor al borrar usuario"});
  }
}

const updateUser = async (req, res) => {
  try {
    const {nombre, email} = req.body;
    const {user_id} = req.query;

    const { data, error } = await supabase
      .from('usuarios').update({ nombre, email })
      .eq('user_id', user_id);

    if (error) {
      throw error;
    }

    res.status(200).send(data);
    //return(data);

  } catch (error) {
    res.status(500).json({message: "Error en el servidor"});
  }

}

const creteUser = async (req, res ) => {
  try {
    const {nombre,email} = req.body;

    const {data, error} = await supabase
    .from('usuarios').insert([{nombre, email}]);
  
    if (error) {
      throw error;
    }

    //console.log(data);
    res.status(200).json({ msg: 'Usuario creado' });
    
    return data;
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
    updateUser,
    deleteUser,
}