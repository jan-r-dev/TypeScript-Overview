function square(num: number): number {
    return num * num
}

const square_arrow = (num: number): number => {
    return num * num
}

function greet(person: string = "Stranger"): void {
    console.log(`Hello there, ${person}.`)
}

const greet_arrow = (person: string = "Stranger"): void => {
    console.log(`Hello there, ${person}.`)
}

