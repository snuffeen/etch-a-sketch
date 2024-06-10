let inputHorizontalSquares = 0
let inputVerticalSquares = 0
let totalSquares = 0

const button = document.querySelector("button")
button.addEventListener("click", createGrid)

const container = document.querySelector("#container")

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
    
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    
    for (let i = 0; i < totalSquares; i++) {
        const content = document.createElement("div")
        content.classList.add("content")
        container.appendChild(content)
    }
}