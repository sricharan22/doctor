
(function ($) {

  "use strict";

  // Initialize the Publication Owl Carousel for the tab content
  $(".publication-carousel").owlCarousel({
    center: true,
    autoplay: true,
    autoplaySpeed: 300,
    smartSpeed: 500,
    loop: true,          // Items don't need to loop
    margin: 0,            // No margin needed as items are full width
    nav: true,            // Show navigation arrows (Prev/Next)
    dots: false,          // Hide dots/pagination
    items: 1,             // CRITICAL: Show only 1 item at a time
    autoHeight: true,     // Optional: Adjust carousel height to content
    responsive: {
      0: {
        items: 1,
        nav: false // Hide nav on smallest screens if preferred
      },
      768: {
        items: 1
      },
      1280: {
        items: 1
      }
    }
  });

  // NAVBAR
  $('.navbar-nav .nav-link').click(function () {
    $(".navbar-collapse").collapse('hide');
  });

  // REVIEWS CAROUSEL
  $('.reviews-carousel').owlCarousel({
    center: true,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 300,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 100,
      },
      1280: {
        items: 2,
        margin: 100,
      }
    }
  });

  // Banner Carousel
  //naem azam
  var myCarousel = document.querySelector('#myCarousel')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1500,
  })

  // REVIEWS NAVIGATION
  function ReviewsNavResize() {
    $(".navbar").scrollspy({ offset: -94 });

    var ReviewsOwlItem = $('.reviews-carousel .owl-item').width();

    $('.reviews-carousel .owl-nav').css({ 'width': (ReviewsOwlItem) + 'px' });
  }

  $(window).on("resize", ReviewsNavResize);
  $(document).on("ready", ReviewsNavResize);

  // HREF LINKS
  $('a[href*="#"]').click(function (event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 74
        }, 1000);
      }
    }
  });

})(window.jQuery);
