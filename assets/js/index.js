//hover effect til-index
(function(){
  const categoryTitles = document.querySelectorAll('.category__title');

  function addHoverEffect (event) {
    event.target.parentNode.parentNode.parentNode.classList.toggle('active-hover');
  }

  categoryTitles.forEach(title => title.addEventListener('mouseover', addHoverEffect));
  categoryTitles.forEach(title => title.addEventListener('mouseout', addHoverEffect));
})();


//Navigation transition on home page
(function() {
  let navigation = document.querySelector('.hero-navigation');
  if (navigation === null) {
    return;
  }
  let hero = document.querySelector('.hero');
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
  }

  let observer = new IntersectionObserver(makeVisible, options);
  function makeVisible(event) {
    if(event[0].intersectionRatio > .5){
      return;
    }
    else {
      navigation.classList.toggle('hero-navigation');
    }

  }

  observer.observe(hero);
})();

(function() {
  const navigation = document.querySelector('.navigation');
  const controls = document.querySelector('.navigation__controls');

  function activateMenu () {
    navigation.classList.toggle('active-menu');
  }

  controls.addEventListener('click', activateMenu);
})();
