let button = document.getElementById("BackToTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset
  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.add('currentSection')
      }else{
          document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.remove('currentSection')
      }
  })
}
window.addEventListener('scroll', scrollActive)

function NA(){
  alert("Currently not available, sorry for your inconvenience.")
}