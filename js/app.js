const btn = document.querySelector('.btn')
const color = document.querySelector('.color')


btn.addEventListener('click', ()=>{
    let hexColor = generateHex()
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
})


const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function generateHex(){
    let hexColor = '#'
   for(let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()]
   }
   return hexColor
}


function getRandomNumber(){
   return Math.floor(Math.random() * hex.length)
}