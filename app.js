const words = [`apple`, `align`, `after`, `aunt`, `boy`, `biscuit`, `ball`,
                `blink`, `baby`, `cat`, `california`, `camera`, `cake`, 
                `cookie`, `dove`, `drive`, `deliver`, `dump`, `dig`, `elephant`,
                `estate`, `eliminate`, `evolve`, `frog`, `farm`, `family`, `further`,
                `friend`, `goat`, `goal`, `gadget`, `girl`, `gone`, `house`, `half`,
                `ham`, `hotdog`, `helicopter`, `igloo`, `ice`, `intense`, `indian`, `joke`,
                `jam`, `juggle`, `jaw`, `kid`, `kangaroo`, `knuckle`, `knife`, `limb`,
                `life`, `love`, `link`, `monkey`, `moved`, `mini`, `mother`, `next`, `night`,
                `never`, `oval`, `over`, `octagon`, `octopus`, `physical`, `plan`, `planet`,
                `pupil`, `quad`, `quiver`, `quarter`, `quality`, `river`, `rank`, `rhino`,
                `reptile`, `snake`, `shift`, `shot`, `sweet`, `tremor`, `tall`, `talent`,
                `tough`, `under`, `ultimate`, `unity`, `uncle`, `venom`, `verse`, `variable`,
                `weather`, `wonder`, `what`, `when`, `xylophone`, `xerox`, `yourself`, `yes`,
                `yell`, `yield`, `zapping`, `zipping`, `zincked`]

const getRandWord = function () {
return words[Math.floor(Math.random() * words.length)]
}

let wins = 0
let losses = 0
let guesses = 8
const lettersGuessed = []
let word = getRandWord()

const displayWord = function (chosen) {
    let wordStr = ``
    let winStatus = true
    word.split(``).forEach(function(letter) {
        if (letter === chosen || lettersGuessed.indexOf(letter) !== -1) {
            wordStr += `${letter} `
        } else {
            wordStr += `_ `
            winStatus = false
        }
    })
    if (winStatus) {
        
    }
    document.getElementById(`word`).textContent = wordStr
}

document.onkeyup = function() {
    if (event.keyCode >= 65 && event.keyCode <= 90){
        if (lettersGuessed.indexOf(event.key) === -1) {
            lettersGuessed.push(event.key)
            document.getElementById(`letters`).textContent = lettersGuessed.join(`, `)
        if (word.includes(event.key)){
            displayWord(event.key)
        } else {
            guesses--
            document.getElementById(`guesses`).textContent = guesses
            if (guesses <= 0) {
                
            }

        }
     }
    }
 }

 displayWord()