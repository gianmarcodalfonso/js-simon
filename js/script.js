const rndmNum = () => {
  return Math.floor(Math.random() * 50 + 1 )
}

console.log(rndmNum())

const targetNums = []

for(let i = 0; i < 5; i++){
  targetNums.push(rndmNum())
}

console.log(targetNums)

const numbersList = document.getElementById(`numbers-list`)

for(let i = 0; i < 5; i++){
  numbersList.innerHTML += `<li>${targetNums[i]}</li>`
}

const countdown = document.getElementById(`countdown`)
const answerForm = document.getElementById(`answers-form`)
const instructions = document.getElementById(`instructions`)


let countLeft = 30;
const timer = setInterval(() => {
  countdown.innerText = countLeft
  countLeft--
  if (countLeft < 0){
    clearInterval(timer)
    countdown.innerText = ``
    numbersList.classList.add(`d-none`)
    answerForm.classList.remove(`d-none`)
    instructions.innerText = `Inserisci i numeri che ricordi`
  }
}, 1000);

const btn = document.querySelector(`.btn`)

btn.addEventListener(`click`, function(e){
  e.preventDefault()

  const inputs = document.querySelectorAll(".form-control");
  const userNums = [];

  for(let i = 0; i < inputs.length; i++){
    userNums.push(parseInt(inputs[i].value))
  }
  console.log(userNums)
  
  
  let match = 0;

  for(let i = 0 ; i < targetNums.length; i++){
    for(let j = 0; j < userNums.length; j++){
      if(targetNums[i] === userNums[j]){
        match++;
      }
    }
  }
  const message = document.getElementById(`message`)
  message.innerText = `Hai trovato ${match} corrispondenze`
})