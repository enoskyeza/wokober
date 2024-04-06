(function ($) {
    "use strict";
    // Services slider
    var gallerySlider = tns({
        container: '.my-slider',
        items: 2,
        slideBy:'page',
        speed: 4300,
        autoplay: true,
        autoplayTimeout: 6750,
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
              items: 4
            },
            990: {
              items: 5
            },
            1180: {
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
          autoplayTimeout:8000,
        autoplay: true,
        nav: false,
        navPosition: 'bottom',
        autoplayButtonOutput: false,
        controlsContainer: '.project-slider-dots',
        prevButton: '.previous',
        nextButton: '.next',
      });

       // logo Slider
       var logoSlider = tns({
        container: '.logo-slider',
        items: 3,
        slideBy:'page',
        speed: 2500,
        autoplay: true,
           autoplayTimeout: 7500,
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
        speed: 2365,
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
