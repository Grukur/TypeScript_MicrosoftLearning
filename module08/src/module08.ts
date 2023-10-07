// Usando espacios de nombre

/*
Si desea que una función o una clase estén disponibles para el código fuera del 
espacio de nombres, agregue la palabra clave export antes de su nombre. Si se 
omite la palabra clave export, el componente solo está disponible dentro del espacio 
de nombres. Puede hacerlo si define componentes a los que solo deben poder acceder 
directamente otros componentes del espacio de nombres. Agregue la palabra clave 
export a la función returnGreeting en ambos espacios de nombres. La función 
getLength no debe ser accesible fuera del espacio de nombres GreetingsWithLength, 
de modo que omita la palabra clave export.
*/
namespace Greetings {
    export function returnGreeting (greeting: string) {
        console.log(`The message from namespace Greetings is ${greeting}.`)
    }
}
namespace GreetingsWithLength {
    export function returnGreeting (greeting: string) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}.
        It is ${greetingLength} character length.`)
    }
    function getLength (message: string): number {
        return message.length;
    }
}

// para usar las funciones que estan dentro de un espacio de nombre, se debe llamar 
// al espacio de nombre primero y luego la funcion o clase dentro 
// (solo se tendra acceso a las fucniones o clases exportadas).

Greetings.returnGreeting('Hola a todos!');
GreetingsWithLength.returnGreeting('Chao a todos!')

// Ordenando el codigo con espacios de nombre anidados

namespace AllGreetings {
    export namespace Greetings {
        export function returnGreeting (greeting: string) {
            console.log(`The message from namespace Greetings is ${greeting}.`)
        }
    }
    export namespace GreetingsWithLength {
        export function returnGreeting (greeting: string) {
            let greetingLength = getLength(greeting);
            console.log(`The message from namespace GreetingsWithLength is ${greeting}.
            It is ${greetingLength} character length.`)
        }
        function getLength (message: string): number {
            return message.length;
        }
    }
}

AllGreetings.Greetings.returnGreeting('Saludando');
AllGreetings.GreetingsWithLength.returnGreeting('Despidiendo');

// Usando alias de nombre (acortando los calls)

import greet = AllGreetings.Greetings;
greet.returnGreeting('hello!')

// Organizando codigo con espacios de nombre de varios archivos

/*
Para ampliar los espacios de nombres, puede compartirlos entre varios archivos TypeScript. 
Si tiene espacios de nombres en varios archivos que se relacionan entre sí, debe agregar 
etiquetas reference para indicar al compilador de TypeScript las relaciones entre los 
archivos. Por ejemplo, suponga que tiene tres archivos Typescript:

interfaces.ts, que declara un espacio de nombres que contiene algunas definiciones de 
interfaz.

functions.ts, que declara un espacio de nombres con funciones que implementan las 
interfaces en interfaces.ts.

main.ts, que llama a las funciones de functions.ts y representa el código principal de 
la aplicación.

Para informar a TypeScript de la relación entre interfaces.ts y functions.ts, agregue 
reference a interfaces.ts mediante la sintaxis de barra diagonal triple (///) a la parte 
superior de functions.ts. Y luego, en main.ts, que está relacionado tanto con interfaces.ts 
como con functions.ts, agregue reference a ambos archivos.

Cuando haya una referencia a más de un archivo, empiece con el espacio de nombres de 
nivel más alto y luego trabaje hacia abajo. TypeScript usará este orden al compilar 
los archivos.

Compilación de espacios de nombres de varios archivos
Hay dos maneras de compilar varios espacios de nombres de archivo: compilación por 
archivo y compilación de un solo archivo.

De forma predeterminada, al ejecutar el compilador de TypeScript en main.ts, examinará 
las instrucciones reference del archivo y generará un archivo JavaScript para cada 
archivo de entrada. Si elige esta opción, use etiquetas <script> en la página web para 
cargar cada archivo emitido en el orden adecuado.

También puede indicar al compilador que genere un solo archivo de salida de JavaScript 
mediante la opción --outFile. En el ejemplo anterior, el comando tsc --outFile main.js 
main.ts indica al compilador que genere un único archivo de JavaScript denominado main.js.
*/



