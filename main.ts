input.onButtonPressed(Button.A, function () {
    count += 2
})
input.onButtonPressed(Button.B, function () {
    count += count
})
let count = 0
count = 0
basic.forever(function () {
    basic.showNumber(count)
})
