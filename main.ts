input.onButtonPressed(Button.A, function () {
    strip = neopixel.create(DigitalPin.P3, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip2 = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip3 = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip4 = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
})
input.onButtonPressed(Button.B, function () {
    strip = neopixel.create(DigitalPin.P3, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    strip2 = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip3 = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    strip4 = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
})
let strip4: neopixel.Strip = null
let strip3: neopixel.Strip = null
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P3, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
strip2 = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip3 = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
strip4 = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
