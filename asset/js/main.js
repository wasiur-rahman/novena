$('.testimonialslider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.partnerslider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

// ScrollToTop
$(document).ready(function () {
  // Show/hide scroll to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scrollToTopBtn').fadeIn();
    } else {
      $('#scrollToTopBtn').fadeOut();
    }
  });

  // Scroll to top when the button is clicked
  $('#scrollToTopBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});





