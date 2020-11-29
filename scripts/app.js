function init() {
  const scroll = window.requestAnimationFrame ||
  function(callback){
    window.setTimeout(callback, 1000 / 60)
  }
  const elementsToShow = document.querySelectorAll('.show-on-scroll')
  // const firstElement = document.querySelector('.show-on-scroll1')
  // const secondElement = document.querySelector('.show-on-scroll2')

  function loop() {
    
    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible')
      } else {
        // element.classList.remove('is-visible')
        return
      }
    })
    
    scroll(loop)
  }
  loop()
  // switchLoop()
  // switchLoop2()
  
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
  
  // function switchLoop() {
    
  //   if (isElementInViewport(firstElement)) {
  //     firstElement.classList.add('is-visible')
  //     secondElement.classList.add('primed')
  //     switchLoop2()
  //     // console.log('weast')
  //   } else {
  //     firstElement.classList.remove('is-visible')
  //   }
  //   scroll(switchLoop)
  // }
  
  // function switchLoop2() {
  //   const primedElement = document.querySelector('.primed')
  //   if (isElementInViewport(primedElement)) {
  //     primedElement.classList.add('is-visible')
  //     firstElement.classList.add('primed')
  //     primedElement.classList.remove('primed')
  //     // console.log('weast')
  //   } else {
  //     secondElement.classList.remove('is-visible')
  //   }
  //   scroll(switchLoop2)
  // }

  // function switchLoop() {

  //   if (isElementInViewport(firstElement)) {
  //     firstElement.classList.add('is-visible')
  //   } else {
  //     firstElement.classList.remove('is-visible')
  //   }
  //   scroll(switchLoop)
  // }
  // first time scrolling through/in view add primed, second time add is visible


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

