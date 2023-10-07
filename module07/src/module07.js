"use strict";
// Exportando e importando componentes de modulo
Object.defineProperty(exports, "__esModule", { value: true });
// Ahora importamos un componente de modulo, donde tenemos 3 formas basicas:
// Importacion unica desde un modulo
//import { <component name> } from '<module name>'
// Importacion unica desde un modulo y cambiando el nombre de la importacion
//import { <component name> as <new name> } from '<module name>'
// Importacion completa desde un modulo
//import * as <variable name> from '<module name>'
var greetings_module_1 = require("./greetings_module");
var greetings_utilities_module_1 = require("./greetings-utilities_module");
(0, greetings_module_1.returnGreeting)('Hola!'); // Displays 'The message from Greetings_module is Hola!'
(0, greetings_utilities_module_1.returnGreeting)('Ciao!'); // Displays 'The message from GreetingsWithLength_module 
// is Ciao! It is 5 characters long.'
