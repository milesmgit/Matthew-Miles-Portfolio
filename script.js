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
let slide = document.createElement('div');

function displayBio() {
  bio.innerHTML = '';
  bio.appendChild(slide);
  slide.id = "slide";
  slide.innerHTML = `<h1 id='bioH1'>Bio</h1>
                  <p class='bioP1'>Matthew Miles is from Louisville, Ky U.S.A and currently lives in the downtown area. The freetime in his youth was spent playing sports; basketball,
                                football, baseball, softball, soccer, and track being the most popular.  He also enjoyed bowling and playing chess. He played varsity basketball and soccer for his alma mater, Spalding University;
                                however, after the start of the second season, he had an accident forcing him to give up playing competitive sports.  He made the best of his new
                                limitations and began hitting the books harder.  Eventually he earned his CompTIA A+ certification, and went on to study programming at a local
                                programming school named Code Louisville.  He studied front end technologies such as JavaScript, CSS, and HTML.  He also studied back end technologies
                                such as C#, ASP.NET, and SQL Database.  He completed three programming tracks and moved on to a software engineering immersive called Louisville
                                Skills as taught by General Assembly and sponsored by a local software firm named Interapt.  He studied front end technologies like JavaScript, CSS, HTML, and REACT,
                                and backend technologies such as NodeJS, MongoDB, and Express.  In addition he learned to work effectively in teams and improved his soft skills considerably.
                                He also learned about the version control software git, and became proficient in using it in combination with GitHub to store multiple versions of his project work.
                                Matthew has thus far completed 8 personal projects and has caught the programming bug as of late.  He hopes to one day find a position where he can work remotely at least
                                part of the work week.</p>

                                <p class="bioP1">Matthew is a graduate of Spalding University in Louisville, KY and graduated with a 3.4/4.0 G.P.A.  He earned a Bachelor's of Science in Business Adminitration.</p>

                                <p class="bioP1">Matthew currently works for Interapt as a software engineering apprentice, but due to the novel COVID-19 virus, most of the company was repurposed to help
                                Humana transition the workforce to work from home.  Matthew has been promoted twice in three months and now works in escalation, a specilized position in the
                                IT department, where he constantly looks for issues that need to be brought to Major Incident specialists' attention so that Humana can mitigate losses in monetary
                                terms and decreased member/agent satisfaction due to massive outages affecting many people or critical applications/software.

                  </p>
                  <a href='about.html'><button type="button" id='resetButton' onclick='resetAboutMe()' class="btn btn-primary btn-lg btn-block">Back</button></a>`


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
