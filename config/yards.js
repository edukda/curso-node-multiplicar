const colors = require('colors');
const argv = require('yargs')
  .option('b', {
    alias: "base",
    type: "number",
    demandOption: true
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10
  })

  .check((argv) => {
    if(isNaN(argv.h)) {
      throw 'Error: Tienes que colocar un numero'.bgRed;
    } else {
      return true;
    }
  })

  .check((argv) => {
    if(isNaN(argv.b)) {
      throw 'Error: el valor tiene que ser un numero'.bgRed;
    } else {
      return true;
    }
  })
  .argv

module.exports = {
  argv
}