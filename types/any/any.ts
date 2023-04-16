let any_type: any = true
any_type = 2
any_type = "string"

// Valid
any_type.non_existent_method()
Math.round(any_type)

/*
All type-checking safeguards that would normally be there and prevent the mess above don't exist with `any`.

Use with caution.
*/


// Implicitly `any`
let inferred_any

inferred_any = "now a string"

// Still `any`
inferred_any


// Type annotation prevents `any` from being inferred 
let delayed_string: string

