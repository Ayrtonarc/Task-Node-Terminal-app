const {mostrarMenu, pauseX} = require('./helpers/mensajes');

require ('colors');
console.clear();

const main = async() => {
    console.log("Hola Mundo");

    let opt = '';

    do{
        opt = await mostrarMenu();
        console.log({ opt });
      if( opt !== '0')  await pauseX();
    }while( opt !== '0');

    
    //pauseX();
}


main();