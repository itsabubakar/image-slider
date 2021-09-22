const container = document.getElementById("container")
const imgs = container.children  // places all the images in an array object

let i = 0

container.addEventListener("click", () => {
    i++;
    container.style.transform = 'translateX(' + -i * 500 + 'px)' // this moves the container by the width of the image 
    if (i > imgs.length - 1) {
        container.style.transform = 'translateX(0px)' // returns the container to its original position
        i = 0
    }
})


/*
    Img contains the link to all my img src. Its as if I am getting the files from a server. The only thing I'd have to do  is parse them as they would come as a json file.

    I tried to loop through them with a for each but that didn't work as it gave me all the sources.

    then I looked up Smilgas similar project and saw he created a counter variable which I he incremented or decremented every time next or prev was clicked.

    And it was resetted after the currentImage was > the img.length
*/
