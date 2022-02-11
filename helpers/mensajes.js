require ('colors');

const mostrarMenu = () => {

    console.clear();
    console.log('========================');
    console.log(' seleccione opcion');
    console.log('========================\n');
    ``
    console.log(`${'1.'} Crear tarea`);
    console.log(`${'2.'} Listar tarea`);
    console.log(`${'3.'} Listar tareas completadas`);
    console.log(`${'4.'} Listar tareas pendientes`);
    console.log(`${'5.'} Completar tarea`);
    console.log(`${'6.'} Borrar  tarea`);
    console.log(`${'0.'} Salir \n`);
   
    
 
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Seleccione un aopcion', (opt) => {
        console.log({ opt });
        readline.close();
    });

  
}

const pauseX = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`\nPresione ${'ENTER'} para continuar`, (opt) => {
        console.log({ opt });
        readline.close();
    });
}

module.exports = {
    mostrarMenu,
    pauseX
}