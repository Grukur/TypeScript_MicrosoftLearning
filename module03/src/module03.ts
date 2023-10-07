// usando interface, basicamente la interface declara los tipos que se usaran 
// en las clases, objetos, etc....

interface names1 {
    firstName: string;
    lastName: string;
    fullName(): string;
}

let nick: names1 = {
    firstName : 'Anto2',
    lastName : 'Chile',
    fullName() : string {
        return this.firstName + '|' + this.lastName;
    }
}

console.log(nick.fullName())


// trabajando con interfaces y tipo opcional:

interface IceCream {
    flavor: string;
    scoops: number;
    instrcuctions?: string;
}

let IceCreamMint: IceCream = {
    flavor : 'mint',
    scoops: 2
}


function scooper(dessert: IceCream) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!'
    }
}

console.log(IceCreamMint)
console.log(scooper({flavor: 'vanilla', scoops: 2}))

// extendiendo interfaces:

interface sundae extends IceCream {
    sauce : 'chocolate' | 'caramel' | 'strawberry';
    nuts? : boolean;
    whippedCream? : boolean;
    instructions? : string;
}

let IceCreamChocolate: sundae = {
    flavor: 'coco',
    scoops: 2,
    sauce:'chocolate',
    nuts: true
}

function scooper2(dessert: sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!'
    }
}

console.log(scooper2({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));

// tipos indexables

interface IceCreamArray {
    [index: number] : string;
}

let myIceCream : IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry', 'coco'];
let myStr : string = myIceCream[0];
console.log(myStr)

// usando fecth, await y async con interfaces:

const fetchURL = 'https://jsonplaceholder.typicode.com/posts'

// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? 'Administrator' : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();


