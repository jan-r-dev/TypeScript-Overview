type Circle = {
    radius: number
}

type Colour = {
    colour: string
}

// Intersection type
type ColouredCircle = Circle & Colour

const cc: ColouredCircle = {
    radius: 32,
    colour: "blue"
}

console.log(cc.colour)
console.log(cc.radius)

// Intersection type with added properties
type PatternedCircle = Circle & Colour & {
    pattern: string
}

const ccp: PatternedCircle = {
    radius: 32,
    colour: "blue",
    pattern: "striped"
}

console.log(ccp.colour)
console.log(ccp.radius)
console.log(ccp.pattern)
