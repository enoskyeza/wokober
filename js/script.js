(function ($) {
    "use strict";
    // Services slider
    var slider = tns({
        container: '.my-slider',
        items: 2,
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

})(jQuery);