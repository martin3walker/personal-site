//page transitions
(function() {
  const wrapper = document.querySelector('.content-wrapper');

  function transitionPage () {
    wrapper.classList.add('slide-in')
  }

  window.addEventListener('load', transitionPage);
})();

//hover effect til-index
(function(){
  const categoryTitles = document.querySelectorAll('.category__title');

  function addHoverEffect (event) {
    event.target.parentNode.parentNode.parentNode.classList.toggle('active-hover');
  }

  categoryTitles.forEach(title => title.addEventListener('mouseover', addHoverEffect));
  categoryTitles.forEach(title => title.addEventListener('mouseout', addHoverEffect));
})();
