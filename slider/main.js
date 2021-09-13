console.log(document.querySelector('.prevv'));

$('.slider__items').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  draggable: false,
  swipe: false,
  prevArrow: document.querySelector('.prev'),
  nextArrow: document.querySelectorAll('.next'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});