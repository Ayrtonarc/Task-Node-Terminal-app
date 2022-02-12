

const { inquirerMenu } = require('./helpers/inquirer');
const { pauseX } = require('./helpers/mensajes');
require ('colors');


console.clear();


const main = async() => {
    console.log("Hola Mundo");

    let opt = '';

    do{
        opt = await inquirerMenu();
        console.log({opt});
        
        await pauseX();
     
    }while( opt !== '0');

    
   
}


main();