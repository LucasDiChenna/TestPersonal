module.exports = (sequelize, DataTypes ) =>{

    let alias = "TipoDeMedio";
    let cols = {
        id: {
            type:DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING
        }
        };
        let config = {
        timestamps : false,
        tableName : "tipos_de_medio"
    };
    
    const TipoDeMedio = sequelize.define(alias, cols, config);

    return TipoDeMedio;

}
