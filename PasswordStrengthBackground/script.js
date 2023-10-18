const bg = document.getElementById("background")
const password = document.getElementById("password")

password.addEventListener("input", (e) => {
    const input = e.target.value
    const length = input.length
    const blurVal = 20 - length *  2
    bg.style.filter= `blur(${blurVal}px)`
})