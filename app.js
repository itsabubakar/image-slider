const image = document.querySelector('#image');

const img = [
    {
        id: 0,
        src: './img/01.jpg'
    },
    {
        id: 1,
        src: './img/02.jpg'
    },
    {
        id: 2,
        src: './img/03.jpg'
    },
    {
        id: 3,
        src: './img/04.jpg'
    },
    {
        id: 4,
        src: './img/05.jpg'
    },
    {
        id: 5,
        src: './img/06.jpg'
    }
]

let currentImage = 0;

image.addEventListener('click', (e)=> {
    // console.log('foo');
    // console.log(e);
    currentImage++;
    if(currentImage > img.length - 1) {
        currentImage = 0;
        image.src = img[currentImage].src;
    } else {
        image.src = img[currentImage].src;
    }

    // currentImage++;
    // img.src = 
    // img.map(image => {
    //     console.log(image.src);
    //     image.src;
    // })

    // image.src = img[0].src
})
