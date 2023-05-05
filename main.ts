input.onButtonPressed(Button.A, function () {
    radio.sendString("hello")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("Hello!")
})
basic.forever(function () {
	
})
