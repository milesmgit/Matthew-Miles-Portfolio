// function to choose background image on click
//const backgroundArray = ['url(img/teal-background.jpg)', 'url(img/blue-background.jpg)', 'url(img/purple-background.jpg)']
// grab button to add one to counter so i can display different backgrounds.
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
let louHref2 = document.getElementById('louHref');
let techlouHref = document.getElementById('techLouHref');
let techlouHref2 = document.getElementById('techLouHref');

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
    backHuge.src = 'img/code-louisville.png';
    louHref2.href = 'https://www.codelouisville.org';
    louHref2.target = "_blank";
    rightHuge.src = 'img/tech-louisville.png';
    techLouHref.href = 'https://www.techlouisville.org';
    techLouHref.target = "_blank";
    leftHuge.src = 'img/tech-louisville.png';
    techLouHref2.href = 'https://www.techlouisville.org';
    techLouHref2.target = "_blank";
}

let bio = document.getElementById('about-main-content');
let wrapper = document.createElement('div');

function displayBio() {
  bio.innerHTML = '';
  bio.appendChild(wrapper);
  wrapper.id = "wrapperId";
  wrapper.innerHTML = `<h1 id='bioH1'>Hello</h1>
                  <p id='bioP1'>Matthew Miles is from Louisville, Ky U.S.A and currently lives in the downtown area.
                  </p>
                  <button id='resetButton' onclick='resetAboutMe()'</button>`

}


function resetAboutMe() {
  bio.innerHTML = `<div id="main-flex">
    <div class="card">
      <div class="resources"><p>Resume</p><a href="https://drive.google.com/file/d/1-tlYJYkcMLbY3jegKX5seRLQ8ff6mQgM/view?usp=sharing" target="_blank"><img src="img/google-drive.jpeg"  alt="Matthew Miles: Resume" width="150" height="150" title="Click to view/download resume (Google Drive):  https://drive.google.com/file/d/1-tlYJYkcMLbY3jegKX5seRLQ8ff6mQgM/view?usp=sharing"></a></div>
    </div>
    <div class="card">
      <div class="resources"><p>LinkedIn Profile</p><a href="https://linkedin.com/in/matthew-miles-code-louisville" target="_blank"><img src="img/linked.jpeg"  alt="Matthew Miles: Linked-In Profile" width="155" height="155" title="Click to view my Linked-In Profile:  https://linkedin.com/in/matthew-miles-code-louisville"></a></div>
    </div>
    <div class="card">
      <div class="resources"><p>GitHub Profile</p><a href="https://github.com/milesmgit?tab=repositories" target="_blank"><img src="img/github.png"  alt="Matthew Miles: GitHub" width="170" height="170" title="Click to view GitHub Profile:  https://github.com/milesmgit?tab=repositories"></a></div>
    </div>
    <div class="card">
      <div class="resources"><p>Bio</p><img id="matt-bio" src="img/matt-miles.jpeg"  onclick="displayBio()" alt="Matthew Miles: Bio" width="170" height="170" title="Click to view Bio:  https://github.com/milesmgit?tab=repositories"></a></div>
    </div>
  </div>`
}
