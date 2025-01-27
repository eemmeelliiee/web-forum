module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts",{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
            //field: 'post_text' would've been used in earlier versions of sequelize to manually convert field property for attribute to snake_case

        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
    }, {
        underscored: true, // underscored: true is used in newer versions of sequelize to automatically convert all field properties (attributes) to snake_case
    });
    return Posts;
};