// Este require es asi, de llamado gral, por lo que llama al index.js ( database/models/index.js )
// Este index.js es el archivo de conexion
// (no hay que indicarle Pelicula ni nada de eso)
const db = require('../database/models'); 


const moviesController = {


  // LIST MOVIES ************
  //OBS se pone 'list' porque asi lo esta llamando desde 'routes/moviesRoutes.ejs'
	list: (req, res) => {

        // OJO! aca va el alias... 'Peliculas' sino no lo toma
        db.Peliculas.findAll()
        .then((resultados) => {
          //OBS se pone movies porque asi lo esta llamando desde 'views/moviesList.ejs'
          movies = resultados;
        }); 

       
        res.render('moviesList', { 
			//OBS tenemos que pasarle la variable
            movies: movies 
		});

	},

  // -----------------------------------
	detail: (req, res) => {

      // OJO! aca va el alias... 'Peliculas' sino no lo toma
      db.Peliculas.findByPk(req.params.id)
      .then((resultados) => {
        //OBS se pone movie (sin ese) porque asi lo esta llamando desde 'views/moviesDetail.ejs'
        movie = resultados;
      }); 

      res.render('moviesDetail', { 
        //OBS tenemos que pasarle la variable
        movie: movie
      });
            
	},
  // -----------------------------------

  new: (req, res) => {

    // OJO! aca va el alias... 'Peliculas' sino no lo toma
    db.Peliculas.findAll(
      {
        order: [['release_date', 'DESC']],
      }
    )
    .then((resultados) => {
      //OBS se pone movies porque asi lo esta llamando desde 'views/moviesList.ejs'
      movies = resultados;
    }); 

   
    res.render('newestMovies', { 
    //OBS tenemos que pasarle la variable
          movies: movies 
    });

  },
  // -----------------------------------

  recomended: (req, res) => {

    // OJO! aca va el alias... 'Peliculas' sino no lo toma
    db.Peliculas.findAll(
      {
        order: [['rating', 'DESC']],
      }
    )
    .then((resultados) => {
      //OBS se pone movies porque asi lo esta llamando desde 'views/moviesList.ejs'
      movies = resultados;
    }); 

   
    res.render('recommendedMovies', { 
    //OBS tenemos que pasarle la variable
          movies: movies 
    });

  },
  // -----------------------------------

};


module.exports = moviesController;