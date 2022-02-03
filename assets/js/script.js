// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

})
let numHeads = document.querySelector('#heads-num')
let percHeads = document.querySelector('#heads-percent')
let numTails = document.querySelector('#tails-num')
let percTails = document.querySelector('#tails-percent')
let pennyImage = document.querySelector('#penny-image')
let totalFlips = 0
let numHeadRolls = 0
let numTailRolls = 0


//flip the penny
let flipPenny = document.querySelector('#flip')
flipPenny.addEventListener('click', function(){
    let rolledValue = Math.round(Math.random() * 100)
    console.log(rolledValue)

if (rolledValue < 50){
        numHeadRolls += 1
        numHeads.textContent = numHeadRolls
        pennyImage.src = "file:///C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/penny-heads.jpg"
        pennyImage.alt = "penny head image"
        totalFlips += 1 
        percHeads.textContent = Math.round(numHeadRolls / totalFlips * 100) + "%"
        if (numTailRolls > 0){
            percTails.textContent = Math.round(numTailRolls / totalFlips * 100) + "%"
        }
    } else {
        numTailRolls += 1
        numTails.textContent = numTailRolls
        pennyImage.src = "file:///C:/Users/carol/InClassAct/FSI-Implement-Coin-Flipper/assets/images/penny-heads.jpg"
        pennyImage.alt = "penny tails image"
        totalFlips += 1
        percTails.textContent = Math.round(numTailRolls / totalFlips * 100) + "%"
        if (numHeadRolls > 0) {
            percHeads.textContent = Math.round(numHeadRolls / totalFlips * 100) + "%"
        }
    }
})

let clearScore = document.querySelector('#clear')
clearScore.addEventListener('click', function(){
    totalFlips = 0
    numHeadRolls = 0
    numTailRolls = 0
    numHeads.textContent = 0
    numTails.textContent = 0
    percHeads.textContent = "0%"
    percTails.textContent = "0%"
})
