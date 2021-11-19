const Sequelize = require("sequelize")
                                /* banco nome user senha */
const sequelize = new Sequelize('celke', 'root', 'admin',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports= {
    Sequelize: Sequelize,
    sequelize: sequelize
}