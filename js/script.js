(function ($) {
    "use strict";
    // Services slider
    var gallerySlider = tns({
        container: '.my-slider',
        items: 2,
        slideBy: 'page',
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

    // Project slider is now handled by smooth-carousel.js
    // Removed Tiny Slider implementation for better performance

    // logo Slider
    var logoSlider = tns({
        container: '.logo-slider',
        items: 3,
        slideBy: 'page',
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

    // Testimonial slider is now handled by smooth-carousel.js
    // Removed Tiny Slider implementation for better performance

    //Submenu Dropdown Toggle
	if ($('.navigation li.dropdown ul').length) {
		$('.navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

        // Add event listener to the newly appended dropdown buttons
        $('.dropdown-btn').on('click', function() {
            // Find the previous sibling ul element and toggle the 'mobile-submenu' class
            $(this).siblings('ul').toggleClass('mobile-submenu');
        });
	}




})(jQuery);
