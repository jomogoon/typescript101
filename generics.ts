function doSomething<T>(arg: T): T {
    return arg
}

doSomething('1')
doSomething(1)
doSomething(true)

doSomething<string>('a');

interface book<T> {
    id: number;
    name: string;
    data: T;
}

const aBook: book<string> = {
    id: 1,
    name: "name",
    data: "data"
}

const bBook: book<string[]> = {
    id: 1,
    name: "name",
    data: ["review1", "review2"]
}