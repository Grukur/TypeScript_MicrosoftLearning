//genericos

/*
Aunque los genéricos son compatibles con muchos lenguajes de programación 
(incluido TypeScript), actualmente no están disponibles en JavaScript. 
Por tanto, para algunos codificadores de JavaScript, los genéricos son un misterio. 
Ahora que va camino de ser un codificador de TypeScript, vamos a desvelar los 
misterios de genéricos y a agregar estas herramientas útiles a su kit de 
herramientas de programación.
*/

/*
Cree funciones genéricas cuando el código sea una función o una clase que:

Funcione con varios tipos de datos.
Use ese tipo de datos en varios lugares.
Los genéricos pueden:

Proporcionar más flexibilidad a la hora de trabajar con tipos.
Permitir la reutilización de código.
Reducir la necesidad de usar el tipo any.
*/

//generadora de array de tipo any

function getArray(items : any[]) : any[] {
    return new Array().concat(items);
}

// generadora de array con genericos

function getArray2<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}

// asi se llama la funcion con genericos:

let numberArray = getArray2<number>([5, 10, 15, 20]);
numberArray.push(25);                      // OK
//numberArray.push('This is not a number');  // Generates a compile time type check error

let stringArray = getArray2<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');               // OK
//stringArray.push(30);                      // Generates a compile time type check error

// ahora se crea una funcion que admite mas de un tipo generico

function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
//returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
//returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'

// ahora creamos un tipo personalizado y lo usamos como base de extension

type ValidTypes = string | number;
function identity2<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result

}

let returnNumber2 = identity2<number, string>(100, 'Hello!');      // OK
let returnString2 = identity2<string, string>('100', 'Hola!');     // OK
//let returnBoolean2 = identity2<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

// restriccion de tipo a una porpiedad de otro objeto

function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
  }
  
  let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
  let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}
  
  console.log(getPets(pets1, "fish"));  // Returns 6
  //console.log(getPets(pets2, "3"));     // Error


// implementando genericos con interfaces y clases

interface Identity3<T, U> {
    value: T;
    message: U;
}

let returnNumber3: Identity3<number, string> = {
    value: 25,
    message: 'Hello!'
}

let returnString3: Identity3<string, number> = {
    value: 'Hello!',
    message: 25
}

interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber4 = processor(100, 'Hello!');


processIdentity(150, 'luna')
processIdentity('luna', 200)

//Declarando interfaz generica coo tipo de clase


interface ProcessIdentity2<T, U> {
    value: T;
    message: U;
    process(): T;
}

class processIdentity2<X, Y> implements ProcessIdentity2<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process(): X {
        console.log(this.message);
        return this.value
    }
}

let processor2 = new processIdentity2<number, string>(100, 'Hello!');
processor2.process();
//processor.value = '100'; //type check error


// Definiendo una clase generica

class prcoessClass<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let processor3 = new prcoessClass<number, string>(100, 'Hello!');
processor3.getIdentity(); //display 'Hello!

//Genericos con tipos y clases personalizados

class Car2 {
    make: string = 'Generic Car';
    doors: number = 4;
}

class Ecar2 extends Car2 {
    make = 'Electric Car';
    doors = 4
}
class Truck extends Car2 {
    make = 'Truck';
    doors = 2
}

function accelerate2<T extends Car2> ( car: T ): T {
    console.log(`All ${car.doors} doors are closed.`)
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myEcar2 = new Ecar2;
accelerate2<Ecar2>(myEcar2);
let myTruck = new Truck;
accelerate2<Truck>(myTruck);

//
