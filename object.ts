let person = {
    name: "Jesse",
    age: 25
}

// person = "him" //
person.name = "John"
// person.age = "two" // error

// declare type
type stringOrNum = string | number;
let yyyy: stringOrNum;
yyyy = "2021"
yyyy = 2021


/** functions */
function calcSUM(a: number, b: number) {
    return a + b;
}
calcSUM(2, 2)

// declare function spec first
let calcSumType: (a: number, b:number, c?: number) => number
calcSumType = (first: number, second: number) => {
    return first + second
}
calcSumType(4, 5)
calcSumType(4, 5, 6)


const sayHi = () => {
    console.log('hi~')
}


/** interface */
interface PersonInterface {
    name: string;
    age: number;
}

// just object
let mike = {
    name: "Mike",
    age: "22"
}

// PersonInterface interface
let john: PersonInterface = {
    name: "John",
    // age: "22" // error
    age: 22
}

class Person implements PersonInterface {
    name: string;
    age: number;
    // email: string; // cannot add

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet() {
        return `Hi, my name is ${this.name} and I am ${this.age}.`
    }
}
