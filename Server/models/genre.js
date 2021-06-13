module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genre', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        imageURL: {
            type: DataTypes.STRING
        },
    }, {
        freezeTableName: true
    });
    return Genre;
}