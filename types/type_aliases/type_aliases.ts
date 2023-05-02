// Basic type declaration
type Coordinates = {
    x: number
    y: number
    // Question mark ? makes the property optional
    z?: number
}

const readCoordinates = (cs: Coordinates): void => {
    console.log(`Coordinate X:\t${cs.x}\nCoordinate Y:\t${cs.y}`)
    // cs.z is optional, must be checked for.
    if (cs.z) {
        console.log(`Coordinate Z:\t${cs.z}`)
    }
}

const cs: Coordinates = {
    x: 42,
    y: 23,
}

readCoordinates(cs)

// Nesting types
type Address = {
    // readonly is a TS keyword that prevents modification. Behaves differently with reference types (immutable vs mutable in Python)
    readonly id: string
    name: string
    population: number
    coordinates: Coordinates
}

const readAddress = (ad: Address): void => {
    console.log(`Logging reading of address ID: ${ad.id}`)
    console.log(`City name:\t${ad.name}\nPopulation:\t${ad.population}`)
    readCoordinates(ad.coordinates)
}

const ad: Address = {
    id: "hoq1293s75",
    name: "Boston",
    population: 123123223,
    coordinates: cs
}

readAddress(ad)