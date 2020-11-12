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
const tilatut = document.querySelector('.tilatut')
const total = document.querySelector('.total')
const MyynnissäOlevat = document.querySelector('.myynissäOlevat')

let summa = 0
let lista = [
    {nimi: 'Makaroonilaatikko',
    annoskoko: '1 litra',
    jäljellä: 12,
    hinta: 2},
    {nimi: 'kanelipulla',
    annoskoko: 'pussi (5 kpl)',
    jäljellä: 5,
    hinta: 0.20}
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


// admin lisää tuotteen Listalle
adminSubmit.addEventListener('click', (event)=> { 
    if(lisää.value === '' || annosKoko.value === '' || määrä.value === '' || hinta.value === '') {
        alert('Et ole antanut kaikkia tietoja')
        return false
    }
    lista.push({nimi: lisää.value, annoskoko: annosKoko.value, jäljellä: määrä.value, hinta: hinta.value }) 
    lisää.value = ''
    määrä.value = ''
    annosKoko.value = ''
    hinta.value = ''
    event.preventDefault()
    päivitä()
  
  
} )

// lisää ruoka tilaus valikkoon nimellä
function lisääListalle() {
    ruokaValikko.innerHTML = ""
    for(let i = 0; i < lista.length; i++) {
    const uusiVaihtoehto = document.createElement('option')
    let teksti =  document.createTextNode(lista[i].nimi)
    uusiVaihtoehto.appendChild(teksti)
    ruokaValikko.appendChild(uusiVaihtoehto)
   
}}


// Myytävien tuotteiden lista
function myyntiLista() {
    ruokaLista.innerHTML = ""
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
// Lisää luvut tilaus formin selectiin
ruokaValikko.addEventListener('click', (e) => {
    tilausMäärä.innerHTML = ""
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
// Lisää listalle napin functio
tilausSubmit.addEventListener('click', (e)=> {
    const uusiDiv = document.createElement('div')
    uusiDiv.innerHTML = `
    <p>${ruokaValikko.value}</p>
    <p>annoksia: ${tilausMäärä.value}</p>
    <button class="remove" onclick="poista(this)">Poista</button>
    `;
    tilatut.appendChild(uusiDiv)
    let löydä = lista.findIndex( ({ nimi }) => nimi === ruokaValikko.value );
    lista[löydä].jäljellä = lista[löydä].jäljellä - tilausMäärä.value
    summa = summa + lista[löydä].hinta * tilausMäärä.value
    total.innerText = summa.toFixed(2)
    
    e.preventDefault()
    päivitä()
    return summa
    
    
    
})

// vähän toistoo, mutta tuli nopeesti tälläi tehtyä toi numero jutska
function alustus() {
    tilausMäärä.innerHTML = ""
    let löydä = lista.find( ({ nimi }) => nimi === ruokaValikko.value );
    let montako = löydä.jäljellä
    for(let i = 0; i < montako; i++) {
        const uusiVaihtoehto = document.createElement('option')
        uusiVaihtoehto.value = i + 1
        let teksti = document.createTextNode(i +1)
        uusiVaihtoehto.appendChild(teksti)
        tilausMäärä.appendChild(uusiVaihtoehto)
    }
}
function poista(e) {
    let TuotteenNimi = e.parentElement.childNodes[1].innerHTML
    let löydä = lista.findIndex( ({ nimi }) => nimi === TuotteenNimi );
    
    let tilattujenMäärä = e.parentElement.childNodes[3].innerHTML
    let res = tilattujenMäärä.replace(/\D/g, "");
    lista[löydä].jäljellä = lista[löydä].jäljellä + res
    summa =  summa - lista[löydä].hinta * res
    e.parentElement.remove()
    total.innerText = summa
    päivitä()
    return summa
}

//adminin poistolista
function poistoLista() {
    MyynnissäOlevat.innerHTML = ""
    for(let annos of lista) {
        const uusiDiv = document.createElement('div')
        uusiDiv.id = `${lisää}`
        uusiDiv.innerHTML = `
        <p>${annos.nimi}</p>
        <p>annoskoko: ${annos.annoskoko}</p>
        <p >Jäljellä: ${annos.jäljellä} annosta</p>
        <p>Hinta:€ ${annos.hinta}</p>
        <button class="poistaTuote" onclick="poistaTuote(this)">Poista tuote</button>
        <br>
        <br>
        `;
        MyynnissäOlevat.appendChild(uusiDiv)
        
    }
}

// poista tuote adminin listalta
function poistaTuote(e) {
    let TuotteenNimi = e.parentElement.childNodes[1].innerHTML
    let löydä = lista.findIndex( ({ nimi }) => nimi === TuotteenNimi );
    
    lista.splice(löydä, 1)
    if(lista.length === 0) {
        myyntiLista()
        poistoLista()
        ruokaValikko.innerHTML = ""
        tilausMäärä.innerHTML = ""
        return false
    }
    päivitä()
}

function päivitä() {
        poistoLista()
        lisääListalle()
        myyntiLista()
        alustus()
}

päivitä()