const ruokaValikko = document.querySelector('#tilaus')
const ruuanNimi = document.querySelector('.ruuanNimi')
const lisää = document.querySelector('#lisää')
const määrä = document.querySelector('#määrä')
const annosKoko = document.querySelector('#annosKoko')
const hinta = document.querySelector('#hinta')
const adminSubmit = document.querySelector('#adminSubmit')
const ruokaLista = document.querySelector('.ruuat')
const tilausSubmit = document.querySelector('#tilausSubmit')
const tilausMäärä = document.querySelector('#tilausMäärä')

let lista = [
    {nimi: 'Makaroonilaatikko',
    annoskoko: '1 Litra',
    jäljellä: 12,
    hinta: 2}
]



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
   
    
    lista.push({nimi: lisää.value, annoskoko: annosKoko.value, jäljellä: määrä.value, hinta: hinta.value })
   
    event.preventDefault()
    
   lisääListalle()
  
} )


function lisääListalle() {
    for(let i = 0; i < lista.length; i++) {
    const uusiVaihtoehto = document.createElement('option')
    let teksti =  document.createTextNode(lista[i].nimi)
    uusiVaihtoehto.appendChild(teksti)
    ruokaValikko.appendChild(uusiVaihtoehto)
    console.log(lista)
}}

tilausSubmit.addEventListener('click', () => {
    let arvo = tilausMäärä.value;
})

function myyntiLista() {
    for(let annos of lista) {
        const uusiDiv = document.createElement('div')
        uusiDiv.id = `${lisää}`
        uusiDiv.innerHTML = `
        <p>${annos.nimi}</p>
        <p>annoskoko: ${annos.annoskoko}</p>
        <p >Jäljellä: ${annos.jäljellä} annosta</p>
        <p>Hinta:€ ${annos.hinta}</p>
        <br>
        `;
        ruokaLista.appendChild(uusiDiv)
        
    }
}

ruokaValikko.addEventListener('click', (e) => {
    console.log(ruokaValikko.value)
    let löydä = lista.find( ({ nimi }) => nimi === ruokaValikko.value );
    let montako = löydä.jäljellä
    for(let i = 0; i < montako; i++) {
        const uusiVaihtoehto = document.createElement('option')
        uusiVaihtoehto.value = i + 1
        let teksti = document.createTextNode(i +1)
        uusiVaihtoehto.appendChild(teksti)
        tilausMäärä.appendChild(uusiVaihtoehto)
    }
} )
myyntiLista()
lisääListalle()