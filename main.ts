basic.forever(function () {
    serial.writeLine("" + (input.acceleration(Dimension.X)))
    serial.writeLine("" + (input.acceleration(Dimension.Y)))
})
