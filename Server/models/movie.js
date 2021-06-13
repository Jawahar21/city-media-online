module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        releaseYear: {
            type: DataTypes.INTEGER
        },
        rating: {
            type: DataTypes.TINYINT
        },
        imageURL: {
            type: DataTypes.STRING
        },
    }, {
        freezeTableName: true
    });
    return Movie;
}