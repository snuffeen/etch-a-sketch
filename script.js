let inputHorizontalSquares = 0
let inputVerticalSquares = 0

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

function createGrid() {
    getUserInput()

    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    
    for (let i = 0; i < inputHorizontalSquares; i++) {
        const horizontal = document.createElement("div")
        horizontal.classList.add("horizontal")
        container.appendChild(horizontal)
        for (let j = 0; j < inputVerticalSquares; j++) {
            const vertical = document.createElement("div")
            vertical.classList.add("vertical")
            horizontal.appendChild(vertical)
        }
    }
}