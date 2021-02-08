def on_received_number_deprecated(receivedNumber):
    led.enable(False)
    # stop
    if receivedNumber == 0:
        stop()
    elif distance >= 2 and receivedNumber == 8:
        forward()
    elif receivedNumber == 7:
        fRight()
    elif receivedNumber == 9:
        fLeft()
    elif receivedNumber == 1:
        rRight()
    elif receivedNumber == 3:
        rLeft()
    elif receivedNumber == 2:
        reverse()
    else:
        stop()
radio.on_received_number_deprecated(on_received_number_deprecated)

def stop():
    pins.analog_write_pin(AnalogPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P13, 0)
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.analog_write_pin(AnalogPin.P2, 0)
    pins.digital_write_pin(DigitalPin.P15, 0)
    pins.digital_write_pin(DigitalPin.P16, 0)
def rRight():
    pins.analog_write_pin(AnalogPin.P1, 300)
    pins.digital_write_pin(DigitalPin.P13, 0)
    pins.digital_write_pin(DigitalPin.P12, 1)
    pins.analog_write_pin(AnalogPin.P2, 500)
    pins.digital_write_pin(DigitalPin.P15, 0)
    pins.digital_write_pin(DigitalPin.P16, 1)
def reverse():
    pins.analog_write_pin(AnalogPin.P1, 700)
    pins.digital_write_pin(DigitalPin.P13, 0)
    pins.digital_write_pin(DigitalPin.P12, 1)
    pins.analog_write_pin(AnalogPin.P2, 700)
    pins.digital_write_pin(DigitalPin.P15, 0)
    pins.digital_write_pin(DigitalPin.P16, 1)
def rLeft():
    pins.analog_write_pin(AnalogPin.P1, 500)
    pins.digital_write_pin(DigitalPin.P13, 0)
    pins.digital_write_pin(DigitalPin.P12, 1)
    pins.analog_write_pin(AnalogPin.P2, 300)
    pins.digital_write_pin(DigitalPin.P15, 0)
    pins.digital_write_pin(DigitalPin.P16, 1)
def fLeft():
    pins.analog_write_pin(AnalogPin.P1, 800)
    pins.digital_write_pin(DigitalPin.P13, 1)
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.analog_write_pin(AnalogPin.P2, 500)
    pins.digital_write_pin(DigitalPin.P15, 1)
    pins.digital_write_pin(DigitalPin.P16, 0)
def forward():
    pins.analog_write_pin(AnalogPin.P1, 700)
    pins.digital_write_pin(DigitalPin.P13, 1)
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.analog_write_pin(AnalogPin.P2, 700)
    pins.digital_write_pin(DigitalPin.P15, 1)
    pins.digital_write_pin(DigitalPin.P16, 0)
def fRight():
    pins.analog_write_pin(AnalogPin.P1, 500)
    pins.digital_write_pin(DigitalPin.P13, 1)
    pins.digital_write_pin(DigitalPin.P12, 0)
    pins.analog_write_pin(AnalogPin.P2, 800)
    pins.digital_write_pin(DigitalPin.P15, 1)
    pins.digital_write_pin(DigitalPin.P16, 0)
distance = 0
radio.set_group(1)
receivedNumber = 0
pins.digital_write_pin(DigitalPin.P14, 1)

def on_forever():
    global distance
    led.enable(False)
    pins.digital_write_pin(DigitalPin.P5, 0)
    distance = sonar.ping(DigitalPin.P3, DigitalPin.P4, PingUnit.CENTIMETERS)
    if distance <= 2:
        pins.digital_write_pin(DigitalPin.P5, 1)
    else:
        pins.digital_write_pin(DigitalPin.P5, 0)
basic.forever(on_forever)
