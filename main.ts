let rand = 0
let players = 0
let i = 0
let currentPlayer = 0
function startGame(){
    players = 2
    currentPlayer = 1
    i = 0
    basic.showNumber(players)
}
input.onPinPressed(TouchPin.P0, function (){
    startGame()
})
input.onButtonPressed(Button.A, function(){
    if(i == 0 && players > 2)
    {
        players -= 1
        basic.showNumber(players)
    }
})
input.onButtonPressed(Button.B, function () {
    if (i == 0) {
        players += 1
        basic.showNumber(players)
    }
})
input.onButtonPressed(Button.AB, function (){
    i += 1
})
function animationArrow(){
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
    `)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
    `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
    `)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
    `)
}
input.onGesture(Gesture.Shake, function(){
    if (i > 0){
        basic.showNumber(currentPlayer)
        animationArrow()
        rand = Math.randomRange(0,1)
        if(rand == 0){
            basic.showString("T")
        }
        else{
            basic.showString("D")
        }
    }
})