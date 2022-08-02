
-----------------------------------------------------------------
Instalar el paquete Sequelize
------------------------------
npm install
npm install sequelize-cli -g
npm install sequelize
npm install mysql2


creación del archivo
.sequelizerc 
lo creamos en la raíz del proyecto con la siguiente estructura (...ver pdf...)


tiramos el comando...
sequelize init


modificar el archivo
/database/config/config.js agregando module.exports al principio del archivo y
configurando los datos de conexión a la base de datos.
module.exports = {
  ...
}


ponemos en limpio las lineas de conexion... (el nombre de database y otros si es necesario)
OBS lo aplique al cambio en las 3 que figuran... development / test / production
    "development": {
      "username": "root",
      "password": null,
      "database": "movies_db",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },


en xamp levantamos el 'mysql'

Iniciamos con...
npm test
y por el navegador vamos a...
http://localhost:3001/


-----------------------------------------------------------------
OBS lo siguiente se hace en 
models/Peliculas.js
models/Generos.js
(la info de las columnas podemos verlas en workbench)

Micro desafío - Paso 2:
Algo fundamental al inicializar un proyecto es explicarle a sequelize las tablas que
tiene nuestra base de datos. 

Para esto debemos crear los modelos para las tablas
movies y genres (Películas y Géneros).

No debemos olvidarnos de aclarar el nombre de la tabla, si usa timestamps 
y todas sus columnas con su tipo. 

Recomendamos aclarar los datos como columnas que
aceptan nulo así como clave primaria y autoincremental.

