// Objects as parameters and return types
const printName = (person: { first: string, last: string }): { first: string, last: string } => {
    console.log(person.first)
    console.log(person.last)

    return { first: person.first, last: person.last }
}

printName({ first: "John", last: "Doe" })

const jane = {
    first: "Jane",
    last: "Doe"
}

printName(jane)

const jeffBeck = {
    first: "Jeff",
    last: "Beck",
    age: 35
}

// The below will be marked as in error. TS design decision.
//printName({first: "Jeff", last: "Beck", age: 35})

// The below is fine.
printName(jeffBeck)