

const { guardarDB } = require('./db/guardarArchivo');
const { inquirerMenu, leerInput } = require('./helpers/inquirer');
const { pauseX } = require('./helpers/mensajes');
const  Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

require ('colors');


console.clear();


const main = async() => {
    console.log("Hola Mundo");

    let opt = '';
    const tareas = new Tareas();

    do{
       opt = await inquirerMenu();
       
       switch (opt){
        case '1':
            //crear option
            const desc = await leerInput('Descripcion: ');
            tareas.crearTarea(desc);
       break;

       case '2':
            console.log( tareas._listado);
       break;
    }

    guardarDB( tareas.listadoArr);

        await pauseX();
     
    }while( opt !== '0');

    
   
}


main();