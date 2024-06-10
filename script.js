let inputHorizontalSquares = 0
let inputVerticalSquares = 0
let totalSquares = 0

const button = document.querySelector("button")
button.addEventListener("click", createGrid)


function getUserInput() {
    inputHorizontalSquares = prompt("horizontal")
    inputVerticalSquares = prompt("vertical")
}

function countSquares() {
    getUserInput()
    totalSquares = inputHorizontalSquares*inputVerticalSquares
    return(totalSquares)
}

function createGrid() {
    countSquares()
    
}