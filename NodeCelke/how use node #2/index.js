console.log("Gerenciador")

var client = "Cesar Augusto"


console.log("client: "+ client)

var valProducto = 100

var valDiscount = 37

var discountFunc = require("./modules/calDiscal")

var Result = discountFunc(valProducto, valDiscount)

console.log("Total price: "+Result)