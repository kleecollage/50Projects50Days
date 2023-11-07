const testimonialsContainer = document.querySelector(".testimonial-container")
const testimonial = document.querySelector(".testimonial")
const userName = document.querySelector(".username")
const userImg = document.querySelector(".user-img")
const role = document.querySelector(".role")

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const testimonials = [
	{
		name: "Maria Rodriguez",
		position: "Software Engineer",
		photo: `https://randomuser.me/api/portraits/women/${getRandomNumber(1,100)}.jpg`,
		text: "Maria is a highly talented software engineer with expertise in various programming languages and a strong problem-solving ability. She has successfully delivered numerous software projects and is known for her dedication to creating high-quality and efficient code.",
	},
	{
		name: "Carlos Sanchez",
		position: "Marketing Manager",
		photo: `https://randomuser.me/api/portraits/men/${getRandomNumber(1, 100)}.jpg`,
		text: "Carlos is an experienced marketing manager who excels in strategic planning, brand management, and digital marketing. His creative ideas and strong leadership have led to significant business growth and brand recognition.",
	},
	{
		name: "Laura Gomez",
		position: "Registered Nurse",
		photo: `https://randomuser.me/api/portraits/women/${getRandomNumber(1, 100)}.jpg`,
		text: "Laura is a compassionate and skilled registered nurse who provides exceptional patient care. Her dedication to the well-being of her patients and her ability to handle critical situations make her an asset to any healthcare team.",
	},
	{
		name: "David Smith",
		position: "Financial Analyst",
		photo: `https://randomuser.me/api/portraits/men/${getRandomNumber(1, 100)}.jpg`,
		text: "David is a highly analytical financial analyst with a deep understanding of financial markets and investment strategies. His insights and recommendations have consistently led to profitable outcomes for his clients.",
	},
	{
		name: "Elena Martinez",
		position: "Graphic Designer",
		photo: `https://randomuser.me/api/portraits/women/${getRandomNumber(1, 100)}.jpg`,
		text: "Elena is a creative and innovative graphic designer known for her exceptional design skills and attention to detail. Her designs have received recognition and praise from clients and peers alike.",
	},
]

let idx = 1

function updateTestimonial() {
	const { name, position, photo, text } = testimonials[idx]

	testimonial.innerHTML = text
	userImg.src = photo
	userName.innerHTML = name
	role.innerHTML = position
    console.log(photo);

	idx++

	if (idx > testimonials.length - 1) {
		idx = 0
	}

}

setInterval(updateTestimonial, 5000)
