/** Types */

// let aString = "Hi"
let aString: string;
aString = "Hi"

// let aNum = 5;
let aNum: number;
aNum = 1

// let aBool = true;
let aBool: boolean;
aBool = false

// possible but not recommanded
let anyVar: any = "a string";
anyVar = 5

let year: string | number;
year = 2021
year = "2021"
// year = false // not allowed
const parsedYear = parseInt(year)


/** arrays */

let arrString: string[] = ["1", "2", "3"]
// arrString[0] = 1 //error
arrString[0] = "a"

let arrNumber: number[] = [1,2,3]
// arrNumber[0] = "1" // error
arrNumber[0] = 10

let arrBool: boolean[] = [true, false]
// arrBool[0] = 0 //error
arrBool[0] = false

// mixed array
let arrMix: (string|number|boolean)[] = [1, "a", true]
arrMix[0] = "b"
arrMix.push(false)

// tuple type
let arrTup: [string, number] = ["a string", 5]
arrTup = ["a", 3]






