input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    m_dpad = true
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    m_dpad = false
})
let m_dpad = false
gamepad.startGamepadService()
let y = 0
let x = 0
let multiple = parseFloat("8.05511811023622")
let deadzone = 40
m_dpad = false
basic.forever(function () {
    x = input.acceleration(Dimension.X) / multiple
    y = input.acceleration(Dimension.Y) / multiple
    if (x < deadzone) {
        x = 0
    }
    if (y < deadzone) {
        y = 0
    }
    if (m_dpad == true) {
        gamepad.send(
        gamepad._buttons(GameButton.none, true),
        0,
        0,
        gamepad._dpad(GameDirection.noDirection),
        0,
        0
        )
    } else if (false) {
    	
    } else {
        gamepad.send(
        gamepad._buttons(GameButton.none, true),
        x,
        y,
        gamepad._dpad(GameDirection.noDirection),
        0,
        0
        )
    }
})
