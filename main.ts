gamepad.startGamepadService()
let y = 0
let x = 0
let multiple = parseFloat("8.05511811023622")
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
})
