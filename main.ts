radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        led2.showColor(neopixel.colors(NeoPixelColors.Yellow))
        music.playMelody("F E A F G E F D ", 120)
    }
    if (receivedNumber == 2) {
        led2.showColor(neopixel.colors(NeoPixelColors.Red))
        music.playMelody("C C5 C C5 C C5 C C5 ", 120)
    }
    if (receivedNumber == 0) {
        led2.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let led2: neopixel.Strip = null
led2 = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
led2.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
	
})
