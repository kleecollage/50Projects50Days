const screens = document.querySelectorAll('.screen')
const choose_waifu_btns = document.querySelectorAll('.choose-waifu-btn')
const start_btn = document.getElementById('start-btn')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
const game_container = document.querySelector('.game-container')

let seconds = 0
let score = 0
let selected_waifu= {}

start_btn.addEventListener('click', () => screens [0].classList.add('up'))

choose_waifu_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_waifu = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createWaifu, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createWaifu() {
    const waifu = document.createElement('div')
    waifu.classList.add('waifu')
    const { x, y } = getRandomLocation()
    waifu.style.top = `${y}px`
    waifu.style.left = `${x}px`
    waifu.innerHTML =
    `
        <img 
            src="${selected_waifu.src}" 
            alt="${selected_waifu.alt}"
            style="transform: rotate(${Math.random() * 360}deg)" />
    `

    waifu.addEventListener('click', catchWaifu)

    game_container.appendChild(waifu)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchWaifu() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addWaifus()
}

function addWaifus() {
    setTimeout(createWaifu, 1000)
    setTimeout(createWaifu, 1500)
}

function increaseScore() {
    score++
    if (score > 19) {
        message.classList.add('visible')
    }

    scoreEl.innerHTML = `Score: ${score}`
}