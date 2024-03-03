(function ($) {
    "use strict";
    // Services slider
    var gallerySlider = tns({
        container: '.my-slider',
        items: 2,
        slideBy:'page',
        speed: 500,
        autoplay: true,
        nav: false,
        navPosition: 'bottom',
        autoplayButtonOutput: false,
        controlsContainer: '#controls',
        prevButton: '.previous',
        nextButton: '.next',
        responsive: {
            640: {
              items: 3
            },
            700: {
              gutter: 0
            },
            900: {
              items: 6
            }
          }
      });

      // Slider 2
      var projectSlider = tns({
        container: '.project-slider',
        items: 1,
        slideBy:'page',
        speed: 500,
        autoplay: true,
        nav: true,
        navPosition: 'bottom',
        autoplayButtonOutput: false,
        controlsContainer: '.project-slider-dots',
        prevButton: '.previous',
        nextButton: '.next',
        responsive: {
            640: {
              items: 1
            },
            700: {
              gutter: 0
            },
            900: {
              items: 1
            }
          }
      });

       // logo Slider
       var projectSlider = tns({
        container: '.logo-slider',
        items: 3,
        slideBy:'page',
        speed: 500,
        autoplay: true,
        nav: false,
        navPosition: 'bottom',
        autoplayButtonOutput: false,
        controlsContainer: '.project-slider-dots',
        prevButton: '.previous',
        nextButton: '.next',
        responsive: {
            640: {
              items: 3
            },
            700: {
              items: 6,
              gutter: 0
            },
            900: {
              items: 6
            }
          }
      });

       // Slider for testimonials
    var testimonialSlider = tns({
        container: '.testimonial-slider',
        items: 1,
        slideBy:'page',
        speed: 500,
        autoplay: true,
        nav: false,
        navPosition: 'bottom',
        autoplayButtonOutput: false,
        controlsContainer: '.project-slider-dots',
        prevButton: '.previous',
        nextButton: '.next',
        responsive: {
            640: {
              items: 1
            },
            700: {
              gutter: 0
            },
            900: {
              items: 1
            }
          }
      });


})(jQuery);
