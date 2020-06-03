






//// function to choose background image on click
//const backgroundArray = ['url(img/teal-background.jpg)', 'url(img/blue-background.jpg)', 'url(img/purple-background.jpg)']
//// grab button to add one to counter so i can display different backgrounds.
//const changeBackground = document.querySelector('#changeBackground');
//const body = document.querySelector('body');
//let counter = 0;
//changeBackground.addEventListener('click', function () {
//    counter++;
//    if (counter > backgroundArray.length - 1) {
//        counter = 0;
//    }
//    body.style.backgroundImage = backgroundArray[counter];
//});



// on mouse hover, change image of the huge-cube


let frontHuge = document.getElementById('front-huge');
let hugeImg = document.getElementById('huge-img');


function rollover(my_img) {

    frontHuge.src = my_img.src;
}

rollover(this);

    







