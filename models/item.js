module.exports = function (sequelize,DataTypes){
     var item = sequelize.define('test',{
        testKey  : DataTypes.INTEGER,
        status:DataTypes.BOOLEAN,
        comments:DataTypes.STRING,
    });
     return item;

}