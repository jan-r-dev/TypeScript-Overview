const colors = ["red", "blue", "orange"]

// Type of `colour` is inferred to be `string`, not `any`.
// Anonymous functions have pretty smart contextual type inference.
const capital_colors = colors.map(colour => {
    return colour.toUpperCase()
})

console.log(capital_colors)