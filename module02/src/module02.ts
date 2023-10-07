//usando el enumerador


enum ContractStatus {
    Permanent = 5,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;

console.log(ContractStatus[employeeStatus]);

// usando el tipo Any

let randomValue: any = 10;
randomValue = 'Mateo';
randomValue = true;

// usando el tipo Unknown

let randomValue2: unknown = 10;
randomValue2 = true;
randomValue2 = 'Juan';

// no permite acceder a las propiedades de las variables unknown

// usando los assertion

(randomValue as string).toLowerCase();

//de esta forma podemos decirle al compilador que use una propiedad en un tipo Any

//ahora un caso mas complejo:

let randomValue3: unknown = 10;

randomValue3 = true;
randomValue3 = 'Mateo';


if (typeof randomValue3 === 'string') {
    console.log((randomValue3 as string).toUpperCase());
} else {
    console.log("Error - A string was expected here.")
}

// en este caso se valida el tipo y según este, se trata como un string o un error.

// usando el union types

let multitype: number | boolean;

multitype = 10;
multitype = true;
//multitype = 'twenty'; //se produce un error ya que no esta dentro de las opciones

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error


// usnado intesection type

interface Employee {
    employeeID: number;
    age: number;
}
interface Manager {
    stockPlan: boolean;
}
type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};

// defiendo literal types

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
//myResult = "failure";       //* Invalid

// otro ejempplo:

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
//diceRoll = 7;    //* Invalid





