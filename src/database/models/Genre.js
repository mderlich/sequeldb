module.exports = (sequelize, DataTypes) => {

	// Alias //////////////
	// (OBS va en plural)
	let alias = "Generos";

	// Columnas //////////////
	let cols = {
		id: {
            // id int(10) UN AI PK 
			type: DataTypes.INTEGER(10),
			primaryKey: true,
			autoIcrement: true,
		},
		name: {
            // name varchar(100) 
			type: DataTypes.STRING(100),
		},
		ranking: {
            // ranking int(10) UN 
			type: DataTypes.INTEGER(10),
		},
		active: {
            // awards int(10) UN 
			type: DataTypes.TINYINT(1),
		},
		
        

	};

	// Mas configuraciones //////////////
	let config = {
		tableName: "genres",
		timestamps: false
	};

	const Genero = sequelize.define(alias,cols,config);

	return Genero;

}

