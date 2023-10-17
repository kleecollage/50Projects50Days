const container = document.getElementById('container');
const colors = ['#FF5733', '#00A86B', '#4286F4', '#D81B60', '#FFD700', '#8B008B', '#2E8B57', '#FF4500', '#9932CC', '#8B4513', '#FF8C00', '#20B2AA', '#FF1493', '#808080', '#800080'
]
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)

}



function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
 element.style.background = '#1d1d1d'
 element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random()* colors.length)]
}

