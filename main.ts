radio.onReceivedNumberDeprecated(function (receivedNumber) {
    led.enable(false)
    // stop
    if (receivedNumber == 0) {
        stop()
    } else if (distance >= 2 && receivedNumber == 8) {
        forward()
    } else if (receivedNumber == 7) {
        fRight()
    } else if (receivedNumber == 9) {
        fLeft()
    } else if (receivedNumber == 1) {
        rRight()
    } else if (receivedNumber == 3) {
        rLeft()
    } else if (receivedNumber == 2) {
        reverse()
    } else {
        stop()
    }
})
function stop () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function rRight () {
    pins.analogWritePin(AnalogPin.P1, 300)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.analogWritePin(AnalogPin.P2, 500)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function reverse () {
    pins.analogWritePin(AnalogPin.P1, 700)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.analogWritePin(AnalogPin.P2, 700)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function rLeft () {
    pins.analogWritePin(AnalogPin.P1, 500)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.analogWritePin(AnalogPin.P2, 300)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function fLeft () {
    pins.analogWritePin(AnalogPin.P1, 800)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P2, 500)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function forward () {
    pins.analogWritePin(AnalogPin.P1, 700)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P2, 700)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function fRight () {
    pins.analogWritePin(AnalogPin.P1, 500)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P2, 800)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
let distance = 0
radio.setGroup(1)
let receivedNumber = 0
pins.digitalWritePin(DigitalPin.P14, 1)
basic.forever(function () {
    led.enable(false)
    pins.digitalWritePin(DigitalPin.P5, 0)
    distance = sonar.ping(
    DigitalPin.P3,
    DigitalPin.P4,
    PingUnit.Centimeters
    )
    if (distance <= 2) {
        pins.digitalWritePin(DigitalPin.P5, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P5, 0)
    }
})
