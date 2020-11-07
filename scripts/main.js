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