//hover effect til-index
(function(){
  const categoryTitles = document.querySelectorAll('.category__title');

  function addHoverEffect (event) {
    event.target.parentNode.parentNode.parentNode.classList.toggle('active-hover');
  }

  categoryTitles.forEach(title => title.addEventListener('mouseover', addHoverEffect));
  categoryTitles.forEach(title => title.addEventListener('mouseout', addHoverEffect));
})();

//smiley animation on home page
(function() {
  const hero = document.querySelector('.hero');

  console.log(window.sessionStorage);
  function activateAnimations () {
    //return if not homepage
    if (hero === null) {
      return;
    }
    //return if they've already seen the animation
    if (window.sessionStorage.homeVisit === "true") {
      hero.classList.remove('hero-animate');
      return;
    }
    let navigation = document.querySelector('.navigation');
    hero.classList.add('active')
    navigation.classList.add('home-navigation')
    setTimeout(() => {
      hero.classList.remove('active', 'hero-animate')
      navigation.classList.remove('home-navigation')
    }, 3700)
    window.sessionStorage.setItem('homeVisit', true);
  }

  window.addEventListener('load', activateAnimations);
})();
