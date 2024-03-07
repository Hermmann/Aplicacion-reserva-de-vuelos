Intruciones.

Instalar los siguientes paquetes:
  -npm init -y
  -npm i express --save
  -npm i nodemon --save
  -npm i @supabase/supabase-js 
  -npm i dotenv -D
  -npm i nodemon -D
  
usar su simulacion de llamadas de api preferido:
  -use Thunder Client

operaciones CRUD.
  -usuarios.
    http://localhost:3000/usuario (GET todos los usuarios)

  -vuelos.
    http://localhost:3000/vuelo (GET todos los vuelos)
    http://localhost:3000/vuelo/disponible (GET de vuelos disponibles)

  -reservas.
    http://localhost:3000/reservas (POST realizar una reserva de vuelo)(parametros a pasar por body: nombre, email, flight_id)
    http://localhost:3000/reservas?reserva_id (GET obtener detalles de una reserva basada en la id)
    http://localhost:3000/reservas?reserva_id= (DELETE Cancelar una reserva basada en el id)
    http://localhost:3000/reservas (GET de todas las reservas)

  nota: Fallo de la aplicación al crear una reserva, la escribe en base de datos una vez y después se crashea,
          no encontré como solucionar esa parte hasta el momento.
