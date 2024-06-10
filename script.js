let inputHorizontalSquares = 0
let inputVerticalSquares = 0
let totalSquares = 0

const button = document.querySelector("button")
button.addEventListener("click", createGrid)


function getUserInput() {
    tempHorizontal = prompt("horizontal")
    tempVertical = prompt("vertical")
    if (isNaN(tempHorizontal)
        || tempHorizontal >= 100
        || isNaN(tempVertical)
        || tempVertical >= 100
    ) {
        getUserInput()
    }
    else {
        inputHorizontalSquares = tempHorizontal
        inputVerticalSquares = tempVertical
    }
}

function countSquares() {
    getUserInput()
    totalSquares = inputHorizontalSquares*inputVerticalSquares
    return(totalSquares)
}

function createGrid() {
    countSquares()
    console.log(totalSquares)
}