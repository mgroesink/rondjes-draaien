input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        led.plot(0, 0)
        basic.pause(500)
        led.unplot(0, 0)
        led.plot(4, 0)
        basic.pause(500)
        led.unplot(4, 0)
        led.plot(4, 4)
        basic.pause(500)
        led.unplot(4, 4)
        led.plot(0, 4)
        basic.pause(500)
        led.unplot(0, 4)
    }
})
