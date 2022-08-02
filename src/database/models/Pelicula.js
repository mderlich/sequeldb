module.exports = (sequelize, DataTypes) => {

	// Alias //////////////
	// (OBS va en plural)
	let alias = "Peliculas";

	// Columnas //////////////
	let cols = {
		id: {
            // id int(10) UN AI PK 
			type: DataTypes.INTEGER(10),
			primaryKey: true,
			autoIcrement: true,
		},
		title: {
            // title varchar(500) 
			type: DataTypes.STRING(500),
		},
		rating: {
            // rating decimal(3,1) UN 
			type: DataTypes.DECIMAL(3,1),
		},
		awards: {
            // awards int(10) UN 
			type: DataTypes.INTEGER(10),
		},
		
		release_date: {
            // awards int(10) UN 
			type: DataTypes.DATE(),
		},
		
		length: {
            // awards int(10) UN 
			type: DataTypes.INTEGER(10),
		},
		
		genre_id: {
            // awards int(10) UN 
			type: DataTypes.INTEGER(10),
		}  


	};

	// Mas configuraciones //////////////
	let config = {
		tableName: "movies",
		timestamps: false
	};

	const Pelicula = sequelize.define(alias,cols,config);

	return Pelicula;

}

