"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGreeting = void 0;
function returnGreeting(greeting) {
    var greetingLength = getLength(greeting);
    console.log("The message from GreetingLength_module is ".concat(greeting, ". It is ").concat(greetingLength, " character length."));
}
exports.returnGreeting = returnGreeting;
function getLength(message) {
    return message.length; // retorna o comprimento da mensagem passada como parametro
}
