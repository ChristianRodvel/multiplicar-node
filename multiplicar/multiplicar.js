const fs = require('fs');
var colors = require('colors');

let listartabla = (base , limite = 10) => {


            console.log(colors.brightBlue('====--------------------==='));
            console.log(colors.brightBlue('====Tabla de multiplicar==='));
            console.log(colors.brightBlue('====--------------------==='));

        for(let i = 1; i<=limite; i++){
            console.log(`${base} * ${i} = ${base * i}`);
        }

}

let crearArchivo = (base , limite = 10) => {
    return new Promise((resolve, reject) => {

        if(!Number(base && limite)) {
            reject(`El valor introducido: ${base}, no es un número`);
            return;
        }

        let data ='';

        for(let i = 1; i<=limite; i++){

            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}-al-${limite} .txt`, data, (err) => {
            
            if (err)
                reject (err)
            else
                resolve(`tabla-del-${base}-al-${limite}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listartabla
}