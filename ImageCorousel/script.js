const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let intervall = setInterval(run, 3500)

function run() {
    idx++

    changeImg()
}

function changeImg() {
    if (idx > img.length-1) {
        idx = 0        
    } else if (idx < 0){
        idx = img.length-1
    }
    imgs.style.transform = `translateX(${-idx * 333}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 5000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImg()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImg()
    resetInterval()
})