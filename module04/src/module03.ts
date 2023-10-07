

function displayAlert(message: string) {
    alert('The message is ' + message);
}

displayAlert('vamos bien')


function sum(input: number[]): number {
    let total: number =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
console.log(sum([5, 4, 1]))

// prametros obligatorios

function addNumbers (x: number, y: number): number {
   return x + y;
}

addNumbers(1, 2); // Returns 3
// addNumbers(1);    // Returns an error

// parametros opcionales

function addNumbers2 (x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}

addNumbers2(1, 2); // Returns 3
addNumbers2(1);    // Returns 1

//parametros predeterminados

function addNumbers3 (x: number, y : number = 25): number {
   return x + y;
}

addNumbers3(1, 2);  // Returns 3
addNumbers3(1);     // Returns 26

//parametros rest

let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
   let total: number =  firstNumber;
   for(let counter = 0; counter < restOfNumbers.length; counter++) {
      if(isNaN(restOfNumbers[counter])){
         continue;
      }
      total += Number(restOfNumbers[counter]);
   }
   return total;
}

addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
// addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5

// parametros de objeto desconstruido

interface Message {
   text: string;
   sender: string;
}

function displayMessage({text, sender}: Message) {
    console.log(`Message from ${sender}: ${text}`);
}

displayMessage({sender: 'Christopher', text: 'hello, world'});


// con tipo
type calculator = (x: number, y: number) => number;


let adder : calculator = (x, y) => x + y;
console.log(adder(4,5))

let subster : calculator = (x, y) => x - y;
console.log(subster(8, 3))

let doCalculation = (operation: 'add' | 'substract') : calculator => {
    if (operation === 'add'){
        return adder;
    } else {
        return subster;
    }
};

console.log(doCalculation('add')(2,8))

// ahora on interface
interface calcul {
    (x: number, 
    y: number):number;
}

let adder2 : calcul = (x, y) => x + y;
console.log(adder2(4,5))

let subster2 : calcul = (x, y) => x - y;
console.log(subster2(8, 3))

let doCalculation2 = (operation: 'add' | 'substract') : calcul => {
    if (operation === 'add'){
        return adder;
    } else {
        return subster;
    }
};

console.log(doCalculation2('add')(2,8))





