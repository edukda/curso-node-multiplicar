const fs = require('fs');
const colors = require('colors');

const CREARARCHIVO = async(base, listar, hasta) => {
  try { 

    let imprimir = '';
    let mostrarSinEspeciales = '';

    for(i = 0; i <= hasta; i++) {
      const result = base * i;
      imprimir += `${colors.green(base)} ${colors.red('x')} ${colors.green(i)} ${colors.blue("=")} ${colors.magenta(result)} \n`;
      mostrarSinEspeciales += `${base} x ${i} = ${result} \n`;
    }

    fs.writeFileSync(`./exit/tabla${base}.txt`, imprimir);

    if(listar) {
      console.log(imprimir);
    }

    return `${colors.bgGreen(`tabla${base}.txt creado con éxito`)}`;

  } catch(err) {
    throw err;
  }
}

module.exports = {
  CREARARCHIVO
}