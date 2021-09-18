module.exports = (sequelize, DataTypes ) =>{

    let alias = "Album";
    let cols = {
        id: {
            type: DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo:{
            type: DataTypes.STRING
        },
        id_artista:{
            type: DataTypes.NUMBER
        },
    
    };
    let config = {
        timestamps : false,
        tableName : "albumes"
    };
    
    const Album = sequelize.define(alias, cols, config);

   Album.associate = function (models){
        Album.hasMany(models.Cancion, {
            as: "canciones",

            foreignKey: "id_album"
        });
        Album.hasMany(models.Artista, {
            as: "artistas",

            foreignKey: "id_album"
        });
    }

    return Album;

}
