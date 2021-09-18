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
        console.log(img[currentImage].src);
        image.src = img[currentImage].src;
    } else {
        image.src = img[currentImage].src;
    }
})


/*
    Img contains the link to all my img src. Its as if I am getting the files from a server. The only thing I'd have to do  is parse them as they would come as a json file.

    I tried to loop through them with a for each but that didn't work as it gave me all the sources.

    then I looked up Smilgas similar project and saw he created a counter variable which I he incremented or decremented every time next or prev was clicked.

    And it was resetted after the currentImage was > the img.length
*/