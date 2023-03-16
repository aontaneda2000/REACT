'use strict'



/*
 . = significa la raiz de la carpeta
  / = accede a los archivos
*/

import { foo, bar } from './explicitas.js'

console.log(foo());



/* importar todo */
import * as lib from './libreria.js'

console.log(lib.PI);
console.log(lib.Persona);

 
/* Importacion predeterminada */

import Persona from './clase.js'

console.log(Persona);

import mth from './clase.js'

console.log(mth.add());

/* variantes */

import miFuncion, {variable, nombre} from  './variantes.js'

console.log(miFuncion());

console.log(variable);
console.log(nombre);

