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

let countLeft = 30;
const timer = setInterval(() => {
  countdown.innerText = countLeft
  countLeft--
  if (countLeft < 0){
    clearInterval(timer)
    countLeft = ``
  }
}, 1000);