
export function returnGreeting (greeting: string) {
    let greetingLength = getLength(greeting);
    console.log(`The message from GreetingLength_module is ${greeting}. It is ${greetingLength} character length.`);
}

function getLength (message :string): number {
    return message.length;  // retorna o comprimento da mensagem passada como parametro
}
