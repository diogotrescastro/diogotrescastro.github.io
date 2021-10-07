
function Animate() {
  const about = document.getElementById('aboutS');
  const skills = document.getElementById('skillsS');
  const portfolio = document.getElementById('portfolioS');
  const text = document.getElementById('footer-text');
  const changeText = () => {
    text.innerHTML = "Feito com Html, Css e Js feat. Google, um pouco de criatividade, e muito amor. 💜"
  }
  if(about.getBoundingClientRect().top < window.innerHeight) {
    about.classList.add("animate__animated")
    about.classList.add("animate__zoomIn")
    about.classList.add("animate__delay-0.5s")
  }
  if(skills.getBoundingClientRect().top < window.innerHeight) {
    skills.classList.add("animate__animated")
    skills.classList.add("animate__zoomIn")
    skills.classList.add("animate__delay-0.5s")
  }
  if(portfolio.getBoundingClientRect().top < window.innerHeight) {
    portfolio.classList.add("animate__animated")
    portfolio.classList.add("animate__zoomIn")
    portfolio.classList.add("animate__delay-0.5s")
  }
  if(text.getBoundingClientRect().top < window.innerHeight) {
    setInterval(changeText, 2000)
  }
  
}


document.getElementById("aboutL").onclick = function () {
  document.getElementById('nav-check').checked = false;
};


document.getElementById("skillsL").onclick = function () {
  document.getElementById('nav-check').checked = false;
};

document.getElementById("portfolioL").onclick = function () {
  document.getElementById('nav-check').checked = false;
};


window.addEventListener('scroll', Animate)
