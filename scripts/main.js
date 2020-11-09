const ruokaValikko = document.querySelector('#tilaus')
const ruuanNimi = document.querySelector('.ruuanNimi')
const lisää = document.querySelector('#lisää')
const määrä = document.querySelector('#määrä')
const annosKoko = document.querySelector('#annosKoko')
const hinta = document.querySelector('#hinta')
const adminSubmit = document.querySelector('#adminSubmit')
const ruokaLista = document.querySelector('.ruuat')
const tilausSubmit = document.querySelector('#tilausSubmit')


function vaihdaTausta(){


const images = [
    'url("/images/pic1.jpg")',
    'url("/images/pic2.jpg")',
    'url("/images/pic3.jpg")',
    'url("/images/pic4.jpg")',
    'url("/images/pic5.jpg")',
    'url("/images/pic6.jpg")',
    'url("/images/pic7.jpg")',
    'url("/images/pic8.jpg")',
    'url("/images/pic9.jpg")',
    'url("/images/pic10.jpg")',
    'url("/images/pic11.jpg")',
    'url("/images/pic12.jpg")',
    'url("/images/pic13.jpg")',
    'url("/images/pic14.jpg")',
    'url("/images/pic15.jpg")',
    'url("/images/pic16.jpg")',
    'url("/images/pic17.jpg")',
    'url("/images/pic18.jpg")',
    'url("/images/pic19.jpg")',
    'url("/images/pic20.jpg")',
   
]
    const section = document.querySelector('.section')
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage = bg;
}

setInterval(vaihdaTausta, 4000)

adminSubmit.addEventListener('click', (event)=> {
    const uusiDiv = document.createElement('div')
    uusiDiv.id = `${lisää}`
    uusiDiv.innerHTML = `
    <p>${lisää.value}</p>
    <p>annoskoko: ${annosKoko.value}</p>
    <p value="${määrä.value}">Jäljellä: ${määrä.value} annosta</p>
    <p>Hinta:€ ${hinta.value}</p>
    <br>
    `;
   
    console.log(uusiDiv)
    
    ruokaLista.appendChild(uusiDiv)
    event.preventDefault()
   lisääListalle()
} )


function lisääListalle() {
    const uusiVaihtoehto = document.createElement('option')
    uusiVaihtoehto.value = `${määrä.value}`
    uusiVaihtoehto.innerHTML = `${lisää.value}`
    ruokaValikko.appendChild(uusiVaihtoehto)
    
}
