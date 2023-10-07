// creando clases


//se agrego implements para pcupar la interfaz de la linea 155
class Car implements Vehicle {
    // properties
    private static numberOfCars: number = 0; //New static property
    private _make: string;
    private _color: string;
    private _doors: number;

    // constructor
    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;

        // con este bloque validamos cuando instanciamos un nuevo objeto car
        /*if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }*/

        this._doors = doors;
        Car.numberOfCars++; //increments the value of the static property
    }

    // accessors
    get make(){
        return this._make
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number')
        }
    }

    // methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    protected worker(): string {
        return this._make;
    }
    public static getNumberOfCars(): string {
        return `There is a total of ${Car.numberOfCars} cars in the store.`;
    }
}


// Instantiates the Car object with all parameters
let myCar1 = new Car('Mazda', 'blue', 2); 

console.log(myCar1.color);
//console.log(myCar1._color); //no se puede acceder mienstra este como privada

let myCar2 = new Car('Galaxy Motors', 'red', 3);

// hacemos un get, todo normal y bien
console.log(myCar2.doors)

// ahora hacemos un set, y entra la evaluacion del set y lanza error
//console.log(myCar2.doors = 5)

let myCar3 = new Car('Galaxy Motors', 'grey');
console.log(myCar3.doors)

console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));

// modificadores de accesso

/*
public	Si no especifica un modificador de acceso, el valor predeterminado 
es público. También puede establecer explícitamente el miembro en público 
mediante la palabra clave public.

private	Si modifica el miembro con la palabra clave private, no se puede 
tener acceso a él desde fuera de la clase contenedora.

protected	El modificador protected actúa de forma muy similar al 
modificador private, con la excepción de que también se puede tener 
acceso a los miembros declarados protected dentro de las clases derivadas.
*/

// ejercicio de aplicacion de modificadores de acceso a una clase

// se aplico private a todas la propiedades y al metodo worker *****

// propiedades estaticas

let myCar4 = new Car('Honda', 'red', 2)

console.log(Car.getNumberOfCars());

// ampliando la clase, extendiendo

class Ecar extends Car{
    //properties
    private _range: number;

    //constructor
    constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }

    //accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }

    //methods
    charge() {
        console.log(this.worker() + 'is charging.')
    }
    // Overrides the brake method of the Car class
    brake(): string {
        return `${this.worker()} is braking with the regenerative braking system.`;
    }
}

let spark = new Ecar('Spark Motors','silver', 124, 2);
let eCar = new Ecar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);         // returns the default, 2
spark.charge();                  // returns "Spark Motors is charging"

// returns "Spark Motors is braking with the regenerative braking system"
console.log(spark.brake());  

// declarando una interfaz para asegurar la forma de la clase
interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

// cuando usar interfaz

/*
Las interfaces son una construcción en tiempo de diseño de TypeScript. 
Dado que JavaScript no tiene un concepto de interfaces, se quitan cuando 
TypeScript se transpila en JavaScript. Esto significa que no tienen 
ningún peso, no ocupan espacio en el archivo resultante y no tienen 
ningún impacto negativo en el código que se ejecutará.

A diferencia de otros lenguajes de programación en los que las interfaces 
solo se pueden usar con clases, TypeScript permite usar una interfaz 
para definir una estructura de datos sin necesidad de una clase. 
Puede utilizar interfaces para definir objetos de parámetro para las 
funciones, definir la estructura de las distintas propiedades del marco 
y definir el aspecto de los objetos desde los servicios remotos o las API.

Si va a crear una aplicación de pila completa con implementaciones de 
cliente y de servidor, normalmente deberá definir cómo se estructurarán 
los datos. Si los datos en cuestión fueran para almacenar información 
sobre un perro, por ejemplo, podría crear una interfaz con el siguiente 
aspecto:
*/

interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}

/*
Esta interfaz se puede usar en un módulo compartido para el código de 
cliente y de servidor, asegurándose de que la estructura de datos es la 
misma en ambos lados. En el cliente, puede tener código para recuperar el 
perro de la API del servidor que defina, que se parece a lo siguiente:
*/

/*
async loadDog(id: number): Dog {
    return await (await fetch('demoUrl')).json() as Dog;
}
*/

/*
Al utilizar la interfaz, loadDog permitirá a TypeScript conocer la 
estructura del objeto. No es necesario crear una clase para asegurarse 
de que funciona.
*/

/*
Cuándo usar clases
La diferencia clave entre las interfaces y las clases en cualquier 
lenguaje de programación es que las clases permiten definir los detalles 
de la implementación. Las interfaces definen únicamente cómo se 
estructuran los datos. Las clases permiten definir métodos, campos y 
propiedades. Las clases también proporcionan una forma de crear 
plantillas de objetos, definiendo valores predeterminados.

Volviendo al ejemplo anterior, en el servidor puede que desee agregar 
código para cargar o guardar un perro en la base de datos. Una técnica 
común para administrar los datos en una base de datos es utilizar lo 
que se conoce como "patrón de registro activo", lo que significa que 
el propio objeto tiene save, load y métodos similares. Podemos utilizar 
la interfaz Dog definida anteriormente para asegurarnos de que tenemos 
las mismas propiedades y la misma estructura, al tiempo que agregamos 
el código necesario para realizar las operaciones.
*/

class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    /*
    static load(id: number): DogRecord {
        // code to load dog from database
        return dog;
    }
    */

    save() {
        // code to save dog to database
    }
}