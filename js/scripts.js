  //Wow animation

$(document).ready(function() {
  new WOW({
    mobile: false,
  }).init(); 
});

// Sliders

var sliders = {
  1: {slider : '#green-dom'},
  2: {slider : '#marketing'},
  3: {slider : '#simple-food'},
  4: {slider : '#bakery'}
};


$(document).ready(function() {
  $.each(sliders, function() {

      $(this.slider).slick({
        lazyLoad: 'ondemand',
      });
      $(this.slider).slickLightbox({
        itemSelector        : '.slider-item a',
        navigateByKeyboard  : true,
        imageMaxHeight      : 1
      });

    });
});

function ShowAndHide() {
    var x = document.getElementById('hidden-projects');
    var y = document.getElementById('button-show');
    var delayInMilliseconds = 3000;

    x.classList.toggle('hide');
    y.classList.add('hide');
    setTimeout(function() {
      x.classList.toggle('hide');
    }, delayInMilliseconds);
}





