function init() {
  const scroll = window.requestAnimationFrame ||
  function(callback){
    window.setTimeout(callback, 1000 / 60)
  }
  const elementsToShow = document.querySelectorAll('.show-on-scroll')
  function loop() {

    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible')
      } else {
        element.classList.remove('is-visible')
      }
    })
  
    scroll(loop)
  }
  loop()
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
  }

  let carouselNum = 0

  const nextButton = document.querySelector('.next')
  const prevButton = document.querySelector('.prev')

  const project1 = document.querySelector('.one')
  const project2 = document.querySelector('.two')
  const project3 = document.querySelector('.three')
  const project4 = document.querySelector('.four')
  const projects = document.querySelectorAll('.project')

  function changeSlide() {
    projects.forEach(element => {
      element.classList.remove('selected')
    })
    if (carouselNum === 0) {
      project1.classList.add('selected')
    } else if (carouselNum === 1) {
      project2.classList.add('selected')
    } else if (carouselNum === 2) {
      project3.classList.add('selected')
    } else {
      project4.classList.add('selected')
    }
  }

  changeSlide()

  function nextSlide() {
    if (carouselNum < 3) {
      carouselNum += 1
    } else {
      carouselNum = 0
    }
    // console.log(carouselNum)
    changeSlide()
  }

  function lastSlide() {
    if (carouselNum > 0) {
      carouselNum -= 1
    } else {
      carouselNum = 3
    }
    // console.log(carouselNum)
    changeSlide()
  }

  nextButton.addEventListener('click', nextSlide)
  prevButton.addEventListener('click', lastSlide)
}

window.addEventListener('DOMContentLoaded', init)

