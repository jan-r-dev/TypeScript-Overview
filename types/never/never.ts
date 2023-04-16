// Will not return anything, as the throw prevents it = `never` returns.
const throw_error = (msg: string = ""): never => {
    throw new Error(msg)
}

// Should never exit = `never` returns.
const game_loop = (): never => {
    while (true) {
        console.log("Looping forever...")
    }
}