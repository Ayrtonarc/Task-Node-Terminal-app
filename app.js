const {mostrarMenu, pauseX} = require('./helpers/mensajes');

require ('colors');
console.clear();

const main = async() => {
    console.log("Hola Mundo");
    mostrarMenu();
    pauseX();
}


main();