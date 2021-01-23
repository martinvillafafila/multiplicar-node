//requireds
const fs = require('fs');
const colors = require('colors');
const { resolve } = require('path');


let listarTabla = (base, limite = 10) => {
    console.log(`==================`.green);
    console.log(`tabla del ${ base }`.green);
    console.log(`==================`.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`El numero ${ i } X ${ base } = ${ base * i }\n`)

    };

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(` el valor  ${ base } no es un numero`)
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `El numero ${ i } X ${ base } = ${ base * i }\n`;
        };

        fs.writeFile(`tablas/tabla${base} al ${limite}.txt `, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla ${base} al ${limite}.txt`)
        });
    });

}

module.exports = { crearArchivo, listarTabla };