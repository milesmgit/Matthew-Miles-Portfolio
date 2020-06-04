






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
//    body.style.backgroundImage = backgroundArray[counter];Screen Shot 2020-06-02 at 11.58.47 PM
//});



// on mouse hover, change image of the huge-cube


let frontHuge = document.getElementById('front-huge');
let backHuge = document.getElementById('back-huge');
let leftHuge = document.getElementById('left-huge');
let rightHuge = document.getElementById('right-huge');
let louHref = document.getElementById('louHref');
let linkedHref = document.getElementById('linkedHref');
let gitHref = document.getElementById('gitHref');
let techlouHref = document.getElementById('techLouHref');

let hugeImg = document.getElementById('huge-img');


function rollover(my_img) {

    frontHuge.src = my_img.src;
    backHuge.src = my_img.src;
    leftHuge.src = my_img.src;
    rightHuge.src = my_img.src;
}

function rollout() {
    frontHuge.src = 'img/code-louisville.png';
    louHref.href = 'https://www.codelouisville.org';
    louHref.target = "_blank";
    backHuge.src = 'img/linked-in.png';
    linkedHref.href = 'https://www.linkedin.com/in/matthew-miles-code-louisville';
    linkedHref.target = "_blank";
    leftHuge.src = 'img/github.png';
    gitHref.href = 'https://www.github.com/milesmgit?tab=repositories';
    gitHref.target = "_blank";
    rightHuge.src = 'img/tech-louisville.png';
    techLouHref.href = 'https://www.techlouisville.org';
    techLouHref.target = "_blank";
}

rollout();


    







