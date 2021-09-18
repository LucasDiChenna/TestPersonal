module.exports = (sequelize, DataTypes ) =>{

    let alias = "Factura";
    let cols = {
        id: {
            type: DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true
        },
        id_cliente:{
            type: DataTypes.NUMBER
        },
        direccion_de_facturacion:{
            type: DataTypes.STRING
        },
        ciudad_de_facturacion:{
            type: DataTypes.STRING
        },
    
        pais_de_facturacion:{
            type: DataTypes.STRING
        },
        total:{
            type: DataTypes.NUMBER
        },
    };
    let config = {
        timestamps : false,
        tableName : "facturas"
    };
    
    const Factura = sequelize.define(alias, cols, config);

   Factura.associate = function (models){
        Factura.belongsTo(models.Cliente, {
            as: "clientes",

            foreignKey: "id_cliente"
        })
    }

    return Factura;

}
