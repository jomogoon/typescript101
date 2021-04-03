/** assign decriptive value */
enum ManufactureMake { TESLA, AUDI, MERCEDES, VOLVO, BMW }

const myCar = {
    year: 2021, 
    make: ManufactureMake.VOLVO
}

console.log(myCar.make)