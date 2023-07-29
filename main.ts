gamepad.startGamepadService()
let y = 0
let x = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
})
