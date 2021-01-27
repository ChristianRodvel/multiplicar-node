/*requireds*/

const argv = require('./config/yargs').argv;

var colors = require('colors');

const {crearArchivo, listartabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){

    case 'listar':
        console.log('Listar');
        listartabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then (archivo => console.log(colors.green(`Archivo creado: ${archivo}`)))
        .catch(e => console.log(e));
        break;
    default:
        console.log(colors.red('El comando no existe'));
}

// let base = 5;

//let argv2 = process.argv;

//console.log('Limite',argv.limite);
//console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1]


