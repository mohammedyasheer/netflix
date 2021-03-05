const abtAnswer = document.querySelectorAll('.about-answer');
const abtContainer = document.querySelector('.about-container');
const pluseIcon = document.querySelector('.fa-plus');
const about = document.querySelector('.about');

about.addEventListener('click' , showAns)
function showAns(e) {
  if(e.target.classList.contains('about-container')){
    
    console.log(123);
    // abtContainer
    // console.log(e.target);
    console.log(e.target.children[1]);
    // e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.classList.toggle('active')
    e.target.nextSibling.nextSibling.classList.toggle('active')
    e.target.children[1].classList.toggle('active')
  }
  e.preventDefault(); 
}

// console.log(document.all);