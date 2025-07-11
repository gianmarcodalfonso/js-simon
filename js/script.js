const rndmNum = () => {
  return Math.floor(Math.random() * 30 + 1 )
}

console.log(rndmNum())

const targetNums = []

for(let i = 0; i < 5; i++){
  targetNums.push(rndmNum())
}

console.log(targetNums)