 const opciones = {
     base: {
         demand: true,
         alias: 'b'

     },
     limite: {
         alias: 'l',
         default: 10

     }
 }
 const argv = require("yargs")

 .command("listar", "Imprime en consola la tabla de multiplicar", opciones)
     .command("crear", "crear un nuevo archivo", opciones)
     .help()
     .argv;

 module.exports = { argv };