// Exportando e importando componentes de modulo


// Ahora importamos un componente de modulo, donde tenemos 3 formas basicas:

// Importacion unica desde un modulo
//import { <component name> } from '<module name>'

// Importacion unica desde un modulo y cambiando el nombre de la importacion
//import { <component name> as <new name> } from '<module name>'

// Importacion completa desde un modulo
//import * as <variable name> from '<module name>'


import { returnGreeting } from "./greetings_module";
import { returnGreeting as returnGreetingLength } from "./greetings-utilities_module";

returnGreeting('Hola!')  // Displays 'The message from Greetings_module is Hola!'

returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module 
                                // is Ciao! It is 5 characters long.'

/*
Aunque algunas bibliotecas de JavaScript tendrán definiciones de tipo, descubrirá 
que muchas de ellas no disponen de esto. El proyecto de código abierto DefinitelyTyped 
es un repositorio de definiciones de tipo TypeScript para muchas de las bibliotecas de 
JavaScript populares. Las definiciones de tipo se instalan mediante el prefijo @types.

Dado que TypeScript solo usa las definiciones de tipo durante el tiempo de diseño, 
no es necesario que formen parte del proyecto publicado. Como resultado, se pueden 
instalar como devDependencies.

En la terminar, este comando se utiliza:
npm install --save-dev @types/<library-name>
*/

/*
Ejercicio
En este ejercicio, se instalará e implementará una biblioteca de tipos denominada dotenv. 
Esta biblioteca de uso frecuente carga las variables de entorno de un archivo .env en 
process.env, lo que permite almacenar los detalles de configuración separados del código 
y acceder a ellos. Puede usar dotenv para administrar elementos, como cadenas de 
conexión y otros valores, que pueden necesitar cambiar en función de dónde se ejecute 
el código.

Abra una nueva área de trabajo en Visual Studio Code.

Agregue un archivo nuevo denominado main.ts.

Desde el terminal, genere un archivo tsconfig.json nuevo con las opciones de 
configuración predeterminadas.

Bash

Copiar
tsc --init
Vaya a DefinitelyTyped y busque la biblioteca de tipos dotenv. DefinitelyTyped 
proporcionará el nombre de la biblioteca que se va a instalar y otros detalles de 
implementación.

En el terminal, use npm para instalar la biblioteca de tipos dotenv en la carpeta 
del proyecto.

Bash

Copiar
npm install dotenv
La definición de tipo dotenv también requiere la instalación de la definición de 
tipo node. node proporciona acceso a process.env para que pueda acceder a él desde 
el código.

Bash

Copiar
npm install --save-dev @types/node @types/dotenv
Cree un archivo denominado .env en la carpeta raíz del proyecto. Este archivo 
contendrá variables específicas del entorno para el proyecto.

En .env, agregue las variables en líneas nuevas con el formato NAME=VALUE. 
En este ejemplo, defina tres variables:

TypeScript

Copiar
DB_HOST=localhost
WEB_HOST=staging.adventure-works.com
En main.ts, importe la biblioteca de tipos dotenv.

TypeScript

Copiar
import dotenv from 'dotenv';
Asigne dotenv.config() a una variable. config lee el archivo .env, analiza el 
contenido, lo asigna a process.env y devuelve un objeto con una clave parsed, 
que incluye el contenido cargado o una clave error si se ha producido un error.

TypeScript

Copiar
const result = dotenv.config();
TypeScript ahora puede proporcionar IntelliSense y la comprobación de tipos 
para el objeto config. Si escribe result., verá que result tiene dos 
propiedades: error y parsed. Agregue una instrucción de comprobación de errores 
para verificar que la operación config ha funcionado según lo esperado.

TypeScript

Copiar
if (result.error) {
    throw result.error;
}
Devuelva el contenido de la propiedad parsed a la consola.

TypeScript

Copiar
console.log(result.parsed);  // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
Acceda a los valores que contiene cada clave en process.env y devuelva 
el valor a la consola.

TypeScript

Copiar
console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
En este ejercicio se proporciona un ejemplo del uso de dotenv. 
Vea dotenv para obtener más información sobre cómo usarlo en el código.
*/









