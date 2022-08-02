// Este require es asi, de llamado gral, por lo que llama al index.js ( database/models/index.js )
// Este index.js es el archivo de conexion
// (no hay que indicarle Pelicula ni nada de eso)
const db = require('../database/models'); 


const genresController = {


  // LIST MOVIES ************
  //OBS se pone 'list' porque asi lo esta llamando desde 'routes/moviesRoutes.ejs'
	list: (req, res) => {

        // OJO! aca va el alias... 'Generos' sino no lo toma
        db.Generos.findAll()
        .then((resultados) => {
          //OBS se pone genres porque asi lo esta llamando desde 'views/genresList.ejs'
          genres = resultados;
        }); 

       
        res.render('genresList', { 
			//OBS tenemos que pasarle la variable
            genres: genres 
		});

	},
// ------------------------------------------

  // -----------------------------------
  detail: (req, res) => {

    // OJO! aca va el alias... 'Generos' sino no lo toma
    db.Generos.findByPk(req.params.id)
    .then((resultados) => {
      //OBS se pone genre (sin ese) porque asi lo esta llamando desde 'views/genresDetail.ejs'
      genre = resultados;
    }); 

    res.render('genresDetail', { 
      //OBS tenemos que pasarle la variable
      genre: genre
    });
          
  },
// -----------------------------------


};


module.exports = genresController;