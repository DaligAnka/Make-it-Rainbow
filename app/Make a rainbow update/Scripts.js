const cols = document.querySelectorAll('.col')

screen.orientation.lock('landscape');

document.addEventListener('keydown',(event) => {
    event.preventDefault()
if (event.code.toLowerCase() === 'space' || 'enter') {
    setRandomColorsAndQuotes()
}
})


document.addEventListener('click',(event) => {
    const type = event.target.dataset.type

    if(type === 'lock'){
        const change = event.target.tagName.toLowerCase() === 'i'
        ? event.target
        : event.target.children[0]

        change.classList.toggle("fa-cloud-rain")
        change.classList.toggle("fa-rainbow")
    }
else if (type === 'copy'){
    copyToClickboard(event.target.textContent)
    alert('Phrase has been copied. Share some nice words with your friends and loved ones!')
}

else if (!type === 'copy' || 'lock')
setRandomColorsAndQuotes()


})



function randomGenerationColor(){
    const hexCodes= '0123456789ABCDEF'
    let color = ''
for (let i=0; i<6; i++){
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
}
return '#' + color
} // This or Chroma library



function randomGenerationQuotes() {
    const quotes =[
{quote: 'Love is Love!'},
{quote: 'Let\'s have a kiki'},
{quote: 'Oh,Hi,Gay!'},
{quote: 'Out and proud'},
{quote: 'I see your true colors shining through'},
{quote: 'Celebrate Trans Pride'},
{quote: 'Don\'t let your inner saboteur get in your way'},
{quote: 'Love yourself'},
{quote: 'LGBT+ rights are human rights'},
{quote: 'Love is not a crime'},
{quote: 'She/Her, He/Him, They/Them. Us.'},
{quote: 'Gay friendly'},
{quote: 'Purrride'},
{quote: 'I love my gay mom/kid/dad'},
{quote: 'Mom,I\'m gay'},
{ quote: 'Love out loud'},
{quote: 'Come out, come out, wherever you are!'},
{quote: 'Love will always win!'},
{quote: 'You\'re awesome!'},
{quote: 'Be who you wanna be!'},
{quote: 'Snakes and stones never broke my bones'},
{ quote: 'We all got crowns!'},
 {quote: 'I love you'},
{quote: 'Love is never wrong'},
{quote: 'Equality means more than passing laws'},
{quote: 'Love him and let him love you'},
{quote: 'Love her and let her love you'},
{quote: 'Love them and let them love you'},
{quote: 'The only queer people are those who don\'t love anybody'},
{quote: 'I believe in you'},
{quote: 'Dont ever give up,hear me?!'},
{quote: 'There\'s no such thing as being extra in June'},
{quote: 'Happy Pride!'},
{quote: 'Everyone wants to feel like someone cares'},
{quote: 'Have fun!'},
{quote: 'Just paint it rainbow'},
{quote: 'You deserve hugs and compliments'},
{quote: 'The world needs more love like the love you two share'},
{quote: 'I\'m so excited to call you by your true name!'},
{quote: 'And I heard that there\'s a special place...'},
{quote: '...where boys and girls can all be queens every day '},
{quote: 'You got your pride! And noone will take it away'}
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    return quotes[arrayIndex].quote;

}

function setRandomColorsAndQuotes(){
    
    cols.forEach((col) => {
        const isLocked = col.querySelector('i').classList.contains("fa-rainbow")
        const text = col.querySelector('h2')
        const button = col.querySelector('button')
        const quote = randomGenerationQuotes()
        const color = chroma.random()

        if(isLocked){
            return
        }
        

        text.textContent = quote
col.style.background = color

setTextColor(text,color)
setButtonColor(button,color)

    })

}

function setTextColor(text,color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}
function setButtonColor(text,color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.4 ? 'purple' : '#FFD700'

}


setRandomColorsAndQuotes()


function copyToClickboard(text){
  return navigator.clipboard.writeText(text)
}





