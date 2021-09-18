module.exports = (sequelize, DataTypes ) =>{

    let alias = "Cliente";
    let cols = {
        id: {
            type: DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true
        },
        primer_nombre:{
            type: DataTypes.STRING
        },
        apellido:{
            type: DataTypes.STRING
        },
        empresa:{
            type: DataTypes.STRING
        },
        direccion:{
            type: DataTypes.STRING
        },
        ciudad:{
            type: DataTypes.STRING
        },
        estado_o_provincia:{
            type: DataTypes.STRING
        },
        pais:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
    };
    let config = {
        timestamps : false,
        tableName : "clientes"
    };
    
    const Cliente = sequelize.define(alias, cols, config);

   Cliente.associate = function (models){
        Cliente.hasMany(models.Factura, {
            as: "facturas",

            foreignKey: "id_genero"
        })
    }

    return Cliente;

}
