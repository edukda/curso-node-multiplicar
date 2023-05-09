const {CREARARCHIVO} = require('./table.js');
const {argv} = require('./config/yards.js');

console.clear();

console.log(argv);

CREARARCHIVO(argv.b, argv.l, argv.h)
  .then(v => console.log(v))
  .catch(err => console.log(err));

