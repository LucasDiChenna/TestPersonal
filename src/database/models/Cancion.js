module.exports = (sequelize, DataTypes ) =>{

    let alias = "Cancion";
    let cols = {
        id: {
            type: DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type: DataTypes.STRING
        },
        id_album:{
            type: DataTypes.NUMBER
        },
    
        id_tipo_de_medio:{
            type: DataTypes.NUMBER
        },
        id_genero:{
            type: DataTypes.NUMBER
        },
        compositor:{
            type: DataTypes.STRING
        },
        milisegundos:{
            type: DataTypes.NUMBER
        },
        bytes:{
            type: DataTypes.NUMBER
        },
        precio_unitario:{
            type: DataTypes.NUMBER
        },
    };
    let config = {
        timestamps : false,
        tableName : "canciones"
    };
    
    const Cancion = sequelize.define(alias, cols, config);

   Cancion.associate = function (models){
       Cancion.belongsTo(models.Album, {
           as: "albumes",

           foreignKey: "id_album"
       });
        Cancion.belongsTo(models.Genero, {
            as: "generos",

            foreignKey: "id_genero"
        });
    };
   
    return Cancion;

}
