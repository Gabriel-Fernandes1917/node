const db = require('./db')

const pagamento = db.sequelize.define('pagamentos', {
    nome: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.DOUBLE
    }
}) /*teable in sql */


/*Force the ceate teable */
pagamento.sync({force: true})