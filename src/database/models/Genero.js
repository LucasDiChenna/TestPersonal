module.exports = (sequelize, DataTypes ) =>{

    let alias = "Genero";
    let cols = {
        id: {
            type: DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type: DataTypes.STRING
        }
    };
    let config = {
        timestamps : false,
        tableName : "generos"
    };
    
    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function (models){
        Genero.hasMany(models.Cancion, {
            as: "canciones",

            foreignKey: "id_genero"
        })
    }
    
    return Genero;

}
