module.exports = (sequelize, DataTypes ) =>{

    let alias = "Artista";
    let cols = {
        id: {
            type: DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type: DataTypes.STRING
        },
    
    };
    let config = {
        timestamps : false,
        tableName : "canciones"
    };
    
    const Artista = sequelize.define(alias, cols, config);

    Artista.associate = function (models){
        Artista.hasMany(models.Album, {
            as: "albumes",

            foreignKey: "id_artista"
        })
    }


    return Artista;

}
