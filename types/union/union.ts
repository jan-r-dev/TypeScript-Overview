// Allows for multiple types
let age: number | string

age = 23
age = "24"

// Note the needed parentheses.
const unionArray: (string | number)[] = [2, 4, 5, "23"]

const calculateTax = (price: number | string, tax: number): number => {
    // Type is narrowed to number here if the initial type is a string.
    if (typeof price === "string") {
        price = price.replace("$", "")
        price = parseFloat(price)
    }

    // This operation would be illegal without the type narrowing above.
    return price * tax
}

const priceNum = 120.20
const priceString = "$120.20"

console.log(calculateTax(priceNum, 0.10))
console.log(calculateTax(priceString, 0.10))