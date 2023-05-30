const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
const text = document.getElementById('text') ;

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--
  }

  smallCups.forEach((cups, idx2) => {
    if (idx2 <= idx) {
      cups.classList.add("full");
    } else {
      cups.classList.remove("full");
    }    
  });

  updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if (fullCups == 0) {
        percentage.style.visibility = 'hidden' ;
        percentage.style.height = 0 ;
    } else {
        percentage.style.visibility = 'visible' ;
        percentage.style.height = `${fullCups / (totalCups - 8) * 330}px`
        percentage.innerText = `${(fullCups / (totalCups - 8) * 100)}%`
    }

    if (fullCups == 8) {
        remained.style.visibility = 'hidden' ;
        remained.style.height = 0 ;        
    } else {
        remained.style.visibility = 'visible' ;
        liters.innerText = `${2 - (250 * (fullCups) / 1000)}L`
    }

    if (fullCups == 9) {
        text.innerText = 'Ok dude thats enough'
    } else if(fullCups == 10){
        text.innerText = 'Seriously men thats enough water'
    }else if (fullCups == 8){
        text.innerText = 'You made it\nCongratulations!!!'
    } else if (fullCups == 11){
        text.innerText = 'Do you want to become a water cistern?'
    } else if (fullCups == 12){
        text.innerText = 'How come you are still alive?'
    } else if (fullCups == 13){
        text.innerText = 'What are you? An elephant?'
    } else if (fullCups == 14){
        text.innerText = 'Leave something for the plants'
    } else if (fullCups == 15){
        text.innerText = 'Bruh 💀'
    } else if (fullCups == 16){
        text.innerText = 'Bruh 💀'
    } else {
        text.innerText = 'Select how many glasses of water that you drank'
    }
}
