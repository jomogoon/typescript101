const inputName = document.querySelector('#name') as HTMLInputElement; // type casting required
const inputAge = document.querySelector('#age') as HTMLInputElement; // type casting required
// const inputForm = document.querySelector('form');  // type casting not required
const inputForm = document.querySelector('form')!;  // (1) sepcify type
const greeting = document.querySelector('.greeting') as HTMLDivElement;

interface PersonInterface {
    name: string;
    age: number;
}

class Man implements PersonInterface {
    constructor(public name: string, public age: number) {}

    greet() {
        return `Hi, my name is ${this.name} and I am ${this.age}.`
    }
}


// inputForm?.addEventListener('submit', () => { // '?' required if type is not specified above (1)
inputForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent change

    const person = new Man(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();

    inputForm.reset();
})


