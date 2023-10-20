const ratings = document.querySelectorAll(".rating")
const panel = document.querySelector("#panel")
const sendBtn = document.querySelector("#send")
const ratingContainer = document.querySelector(".rating-container")

let slctRating = "Satisfied"

ratingContainer.addEventListener("click", (e) => {
	if (e.target.parentNode.classList.contains("rating")) {
		removeActive()
		e.target.parentNode.classList.add("active")
		slctRating = e.target.nextElementSibling.innerHTML
		console.log(slctRating)
	}
})

sendBtn.addEventListener("click", (e) => {
	panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong>
        </br>
        <strong>Feedback: ${slctRating}</strong>
        <p>We'll clean our asses with your feedback</p>
    `
})

function removeActive() {
	for (let i = 0; i < ratings.length; i++) {
		ratings[i].classList.remove("active")
	}
}
