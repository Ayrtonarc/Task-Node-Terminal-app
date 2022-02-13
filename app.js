

const { inquirerMenu } = require('./helpers/inquirer');
const { pauseX } = require('./helpers/mensajes');
const  Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

require ('colors');


console.clear();


const main = async() => {
    console.log("Hola Mundo");

    let opt = '';

    do{
       // opt = await inquirerMenu();
       // console.log({opt});
        const tareas = new Tareas('adquirir com');
        const tarea = new Tarea('comprar comida');

        tareas._listado[tarea.id] = tarea;

        console.log(tareas);        
        await pauseX();
     
    }while( opt !== '0');

    
   
}


main();