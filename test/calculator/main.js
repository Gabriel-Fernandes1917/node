var prompt = require("prompt-sync")
var a = prompt()

console.log("welcome\n")
var choice = 0
console.log("1- add \n2- sub \n3- mult \n4- div \n")
choice  = a()

if (choice == 1) {
    var addFunction = require('./modules/add');
    console.log("You selected add option \n")
    var value1 = a("info the first value: ")
    console.log("\n")
    var value2 = a("info the second value: ")
    console.log("\n")
    console.log(addFunction(Number(value1), Number(value2)))
}else if (choice == 2) {
    var subFunction = require('./modules/sub');
    console.log("You selected sub option \n")
    var value1 = a("info the first value: ")
    console.log("\n")
    var value2 = a("info the second value: ")
    console.log("\n")
    console.log(subFunction(Number(value1), Number(value2)))
}else if (choice == 3) {
    var subFunction = require('./modules/mult');
    console.log("You selected mult option \n")
    var value1 = a("info the first value: ")
    console.log("\n")
    var value2 = a("info the second value: ")
    console.log("\n")
    console.log(subFunction(Number(value1), Number(value2)))
}else if (choice == 4) {
    var subFunction = require('./modules/div');
    console.log("You selected div option \n")
    var value1 = a("info the first value:")
    console.log("\n")
    var value2 = a("You wait div "+value1+" per:")
    console.log("\n")
    console.log(subFunction(Number(value1), Number(value2)))
}else{
    console.log("ERROR this option not exist")
}


/*console.log(addFunction(x,4)); */