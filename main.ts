basic.clearScreen()
basic.forever(function () {
    for (let Fila = 0; Fila <= 4; Fila++) {
        for (let Columna = 0; Columna <= 4; Columna++) {
            led.plot(Columna, Fila)
            basic.pause(500)
            led.unplot(Columna, Fila)
        }
    }
})
