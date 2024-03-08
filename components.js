class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <!-- Header Area -->
        <header class="main-header-one">

            <!-- Navbar Bar -->
            <div class="navbar-area">
<!--                <div class="main-responsive-nav">-->
<!--                    <div class="container">-->
<!--                        <div class="main-responsive-menu">-->
<!--                            <div class="main-menu__logo">-->
<!--                                <a href="/"><img decoding="async" width="150" height="50px" src="./images/img/Logo-01.png"-->
<!--                                                 alt="Wokober"></a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
                <div class="main-navbar">
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <div class="main-menu__logo">
                                <a href="/"><img decoding="async" width="150" height="50" src="./images/img/Logo-01.png"
                                                 alt="Wokober"></a>
                            </div>
                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <!-- <li class="nav-item">
                                        <a href="index.html" class="nav-link active">Home</a>
                                    </li> -->
                                    <li class="nav-item">
                                        <a href="#" class="nav-link" style="font-size:14px;">
                                            About
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a href="#" class="nav-link"
                                                   style="font-size:14px;">Causes</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">Causes Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link" style="font-size:14px;">
                                            Toy Festivals

                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a href="tf-2022.html" class="nav-link">Toy Festival 2022</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">Toy Festival 2023</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link" style="font-size:14px;">
                                            Mentorship Programmes

                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">MP 2023</a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">MP 2024</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link" style="font-size:14px;">
                                            Get Involved

                                        </a>
                                        <!--                                    <ul class="dropdown-menu">-->
                                        <!--                                        <li class="nav-item">-->
                                        <!--                                            <a href="news.html" class="nav-link">News</a>-->
                                        <!--                                        </li>-->
                                        <!--                                        <li class="nav-item">-->
                                        <!--                                            <a href="news-details.html" class="nav-link">News Details</a>-->
                                        <!--                                        </li>-->
                                        <!--                                    </ul>-->
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link" style="font-size:14px;">Blog</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="contact.html" class="nav-link" style="font-size:14px;">Contact Us</a>
                                    </li>
                                </ul>
                                <div class="others-options d-flex align-items-center">
                                    <div class="option-item">
                                        <a href="#" class="btn btn-warning">Donate</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
<!--                <div class="others-option-for-responsive">-->
<!--                    <div class="container">-->
<!--                        <div class="dot-menu">-->
<!--                            <div class="inner">-->
<!--                                <div class="circle circle-one"></div>-->
<!--                                <div class="circle circle-two"></div>-->
<!--                                <div class="circle circle-three"></div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="container">-->
<!--                            <div class="option-inner">-->
<!--                                <div class="others-options d-flex align-items-center">-->
<!--                                    <div class="option-item">-->
<!--                                        <a href="#" class="btn  btn_navber bg-warning">Donate</a>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
        </header>
        <!-- New Nav Section End -->


        <!--Page Header Start-->
        <section class="page-header">
            <div class="page-header-bg"></div>
            <div class="container">
                <div class="page-header__inner">
                    <ul class="thm-breadcrumb list-unstyled ml-0" typeof="BreadcrumbList" vocab="https://schema.org/">
                        <!-- Breadcrumb NavXT 7.1.0 -->
                        <li class="home"><span property="itemListElement" typeof="ListItem">
                            <a property="item" typeof="WebPage" title="Go to Wokober." href="/" class="home"><span
                                property="name">Wokober</span></a>
                                <meta property="position" content="1">
                            </span></li>
                        <li class="post post-page current-item"><span property="itemListElement" typeof="ListItem"><span
                                property="name" class="post post-page current-item">Donate</span>
                                <meta property="url" content="#here">
                                <meta property="position" content="2">
                            </span></li>
                    </ul>
                    <!--                <h2> Get Involved </h2>-->
                </div>
            </div>
        </section>
        <!--Page Header End-->
        `
    }
}

class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <!-- the loop -->
        <div data-elementor-type="wp-post" data-elementor-id="753" class="elementor elementor-753">
            <section
                    class="elementor-section elementor-top-section elementor-element elementor-element-eab01e4 site-footer elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="eab01e4" data-element_type="section">
                <div class="elementor-container elementor-column-gap-no">
                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e7a676e"
                         data-id="e7a676e" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-8640f2b elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-oxpins-shape"
                                 data-id="8640f2b" data-element_type="widget" data-widget_type="oxpins-shape.default">
                                <div class="elementor-widget-container">
                                    <div class="site-footer-bg" style="background-image: url(#);">
                                    </div>
                                </div>
                            </div>
                            <section
                                    class="elementor-section elementor-inner-section elementor-element elementor-element-b304c81 site-footer__top elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="b304c81" data-element_type="section">
                                <div class="container-fluid text-light footer wow fadeIn" data-wow-delay="0.1s">
                                    <div class="container">
                                        <div class="row g-5">
                                            <div class="col-lg-4 pe-lg-5 col-md-6">
                                                <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-0357d7f w-100"
                                                     data-id="0357d7f" data-element_type="column">
                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                        <div class="elementor-element elementor-element-eb65305 elementor-widget elementor-widget-footer-about"
                                                             data-id="eb65305" data-element_type="widget"
                                                             data-widget_type="footer-about.default">
                                                            <div class="elementor-widget-container">
                                                                <div class="footer-widget__column footer-widget__about">
                                                                    <div class="footer-widget__about-logo"><a
                                                                            href="/"><img decoding="async" width="150"
                                                                                          height="50"
                                                                                          src="./images/img/Logo-02.png"
                                                                                          alt="Wokober"></a></div>
                                                                    <div class="footer-widget__about-text-box">
                                                                        <p class="footer-widget__about-text">Wokober is
                                                                            a leading organization dedicated to
                                                                            elevating human experience through
                                                                            innovative designs, captivating story
                                                                            telling, and transformative education.</p>
                                                                    </div>
                                                                    <a href="donate.html" class="btn donate_button">Donate</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-md-6">
                                                <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-0357d7f w-100"
                                                     data-id="f3dbd25" data-element_type="column">
                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                        <div class="elementor-element elementor-element-373eb29 elementor-widget elementor-widget-footer-nav-menu"
                                                             data-id="373eb29" data-element_type="widget"
                                                             data-widget_type="footer-nav-menu.default">
                                                            <div class="elementor-widget-container">
                                                                <div
                                                                        class="footer-widget__column footer-widget__links clearfix">
                                                                    <h3 class="footer-widget__title">Links</h3>
                                                                    <ul id="menu-links"
                                                                        class="footer-widget__links-list list-unstyled clearfix ml-0">
                                                                        <li id="menu-item-763"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-763">
                                                                            <a href="#">About
                                                                                Us</a>
                                                                        </li>
                                                                        <li id="menu-item-764"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-764">
                                                                            <a href="#">Contact</a>
                                                                        </li>
                                                                        <li id="menu-item-765"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-765">
                                                                            <a href="#/news-sidebar/">Latest
                                                                                News</a>
                                                                        </li>
                                                                        <li id="menu-item-766"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-766">
                                                                            <a href="tf-2022">Recent
                                                                                Events</a>
                                                                        </li>
                                                                        <li id="menu-item-767"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-767">
                                                                            <a href="get_involved">Donations</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-6">
                                                <div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-0357d7f w-100"
                                                     data-id="f3dbd25" data-element_type="column">
                                                    <div class="elementor-widget-wrap elementor-element-populated">
                                                        <div class="elementor-element elementor-element-373eb29 elementor-widget elementor-widget-footer-contact"
                                                             data-id="373eb29" data-element_type="widget"
                                                             data-widget_type="footer-nav-menu.default">
                                                            <div class="elementor-widget-container">
                                                                <div
                                                                        class="footer-widget__column footer-widget__contact">
                                                                    <h3 class="footer-widget__title">Contacts</h3>
                                                                    <p class="footer-widget__contact-text">P.O.BOX 42,
                                                                        Ebb
                                                                        <br> Elephante Commons, Gulu City
                                                                    </p>
                                                                    <ul
                                                                            class="list-unstyled footer-widget__contact-list ml-0">
                                                                        <li>
                                                                            <div class="icon"><i aria-hidden="true"
                                                                                                 class="fa fa-envelope"></i>
                                                                            </div>
                                                                            <div class="text">
                                                                                <p><a
                                                                                        href="mailto:wokober.i@gmail.com">wokober.i@gmail.com</a>
                                                                                </p>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div class="icon"><i aria-hidden="true"
                                                                                                 class="fas fa-phone-alt"></i>
                                                                            </div>
                                                                            <div class="text">
                                                                                <p><a href="tel:+256784041804">+256 784
                                                                                    041804</a>
                                                                                </p>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                    <div class="site-footer__social ml-0"><a
                                                                            href="https://twitter.com/wokober">
                                                                        <i aria-hidden="true"
                                                                           class="fab fa-twitter"></i> </a>
                                                                        <a href="https://facebook.com/wokober"> <i
                                                                                aria-hidden="true"
                                                                                class="fab fa-facebook-f"></i> </a> <a
                                                                                href="https://www.youtube.com/@wokober"> <i
                                                                                aria-hidden="true"
                                                                                class="fab fa-youtube"></i> </a>
                                                                        <a href="https://instagram.com"> <i
                                                                                aria-hidden="true"
                                                                                class="fab fa-instagram"></i> </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-6">
                                                <h4 class="mb-4 footer-widget__title">Newsletter</h4>
                                                <p>Subscribe to our Newletter to keep up with the latest news.</p>
                                                <div class="position-relative mt-2 w-100">
                                                    <input
                                                            class="form-control bg-light border-light w-100 py-3 ps-4 pe-5"
                                                            type="text" placeholder="Your email">
                                                    <button type="button"
                                                            class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
                                                        SignUp
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <section
                    class="elementor-section elementor-top-section elementor-element elementor-element-5a67e6c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="5a67e6c" data-element_type="section">
                <div class="elementor-container elementor-column-gap-no">
                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4467a84"
                         data-id="4467a84" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div class="elementor-element elementor-element-62e94c4 elementor-widget elementor-widget-footer-copyright"
                                 data-id="62e94c4" data-element_type="widget"
                                 data-widget_type="footer-copyright.default">
                                <div class="elementor-widget-container">
                                    <div class="site-footer__bottom">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="site-footer__bottom-inner ">
                                                        <p class="site-footer__bottom-text"> ©2024 Wokober, All
                                                            Copyright Reserved. </p>
                                                        <!-- <p class="site-footer__bottom-text ms-auto"><a href ="#"> Designed by Jitu Tech</a></p> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- end of the loop -->
                
        `
    }
}


class HeadLinks extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <link rel='stylesheet' id='wp-block-library-css' href='./css/dist-block-library-style.min.css' media='all'/>
        <link rel='stylesheet' id='classic-theme-styles-css' href='./css/57g-classic-themes.min.css' media='all'/>
        <link rel='stylesheet' id='contact-form-7-css' href='./css/contact-form-7-includes-css-styles.css' media='all'/>
        <link rel='stylesheet' id='give-styles-css' href='./css/give-assets-dist-css-give.css' media='all'/>
        <link rel='stylesheet' id='oxpins-ui-css' href='./css/oxpins-addon-assets-vendors-jquery-ui-jquery-ui.css'
              media='all'/>
        <link rel='stylesheet' id='animate-css' href='./css/oxpins-addon-assets-vendors-animate-animate.min.css'
              media='all'/>
        <link rel='stylesheet' id='custom-animate-css' href='./css/oxpins-addon-assets-vendors-animate-custom-animate.css'
              media='all'/>
        <link rel='stylesheet' id='bxslider-css' href='./css/oxpins-addon-assets-vendors-bxslider-jquery.bxslider.css'
              media='all'/>
        <link rel='stylesheet' id='jarallax-css' href='./css/oxpins-addon-assets-vendors-jarallax-jarallax.css'
              media='all'/>
        <link rel='stylesheet' id='jquery-magnific-popup-css'
              href='./css/oxpins-addon-assets-vendors-jquery-magnific-popup-jquery.magnific-popup.css' media='all'/>
        <link rel='stylesheet' id='odometer-css' href='./css/oxpins-addon-assets-vendors-odometer-odometer.min.css'
              media='all'/>
        <link rel='stylesheet' id='owl-carousel-css'
              href='./css/oxpins-addon-assets-vendors-owl-carousel-owl.carousel.min.css' media='all'/>
        <link rel='stylesheet' id='owl-theme-css'
              href='./css/oxpins-addon-assets-vendors-owl-carousel-owl.theme.default.min.css' media='all'/>
        <link rel='stylesheet' id='the-sayinistic-font-css'
              href='./css/oxpins-addon-assets-vendors-the-sayinistic-font-stylesheet.css' media='all'/>
        <link rel='stylesheet' id='swiper-css' href='./css/oxpins-addon-assets-vendors-swiper-swiper.min.css' media='all'/>
        <link rel='stylesheet' id='oxpins-addon-style-css' href='./css/oxpins-addon-assets-css-oxpins-addon.css'
              media='all'/>
        <link rel='stylesheet' id='oxpins-fonts-css'
              href='//fonts.googleapis.com/css?family=Nunito%3A200%3B200i%2C300%2C300i%2C500%2C500i%2C600%2C600i%2C700%2C700i%2C800%2C800i%2C900%2C900i%7CManrope%3A200%2C200i%2C300%2C300i%2C400i%2C500%2C500i%2C600%2C600i%2C700%2C700i%2C800%2C800i%7CCaveat%3A400%2C400i%2C500%2C500i%2C600%2C600i%2C700%2C700i%26subset%3Dlatin%2Clatin-ext'
              media='all'/>
        <link rel='stylesheet' id='oxpins-icons-css' href='./css/oxpins-assets-vendors-oxpins-icons-style.css'
              media='all'/>
        <link rel='stylesheet' id='bootstrap-css' href='./css/oxpins-assets-vendors-bootstrap-css-bootstrap.min.css'
              media='all'/>
        <link rel='stylesheet' id='fontawesome-css' href='./css/oxpins-assets-vendors-fontawesome-css-all.min.css'
              media='all'/>
        <link rel='stylesheet' id='oxpins-style-css' href='./css/oxpins-style.css' media='all'/>
    
        <!-- My fonts -->
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Noteworthy&display=swap" rel="stylesheet">
    
    
        <link rel='stylesheet' id='recent-posts-widget-with-thumbnails-public-style-css'
              href='./css/recent-posts-widget-with-thumbnails-public.css' media='all'/>
        <link rel='stylesheet' id='elementor-icons-css' href='./css/elementor-assets-lib-eicons-css-elementor-icons.min.css'
              media='all'/>
        <link rel='stylesheet' id='elementor-frontend-css' href='./css/elementor-assets-css-frontend-lite.min.css'
              media='all'/>
        <link rel='stylesheet' id='elementor-post-31-css' href='./css/elementor-css-post-31.css' media='all'/>
        <link rel='stylesheet' id='google-fonts-1-css'
              href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=swap&#038;ver=6.1.1'
              media='all'/>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin/>
        <script src='./js/jquery-jquery.min.js' id='jquery-core-js'></script>
        <script src='./js/dist-vendor-regenerator-runtime.min.js' id='regenerator-runtime-js'></script>
        <script src='./js/dist-vendor-wp-polyfill.min.js' id='wp-polyfill-js'></script>
        <script src='./js/dist-hooks.min.js' id='wp-hooks-js'></script>
        <script src='./js/dist-i18n.min.js' id='wp-i18n-js'></script>
    
        <!-- navber css -->
        <link rel="stylesheet" href="./css/navber.css"/>
    
        <!-- Icons -->
        <link rel="icon" href="./images/logo_icon/favicon-w-32x32.png" sizes="32x32"/>
        <link rel="icon" href="./images/logo_icon/favicon-32x32.png" sizes="192x192"/>
        <link rel="apple-touch-icon" href="./images/logo_icon/apple-touch-icon.png"/>
    
    
        <!-- Page Styles -->
        <style id='oxpins-style-inline-css'>
            :root {
                --oxpins-primary: #9fdefe;
                --oxpins-primary-rgb: 159, 222, 254;
                --oxpins-base: #0036fc;
                --oxpins-base-rgb: 94, 143, 253;
                --secondary: #F5E2C8;
                --secondary-rgb: 245, 226, 200;
    
            }
    
        </style>
        `
    }
}

class Scripts extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <link rel='stylesheet' id='elementor-post-698-css' href='./css/elementor-css-post-698.css' media='all'/>
        <link rel='stylesheet' id='elementor-post-753-css' href='./css/elementor-css-post-753.css' media='all'/>
        <link rel='stylesheet' id='elementor-icons-shared-0-css'
              href='./css/elementor-assets-lib-font-awesome-css-fontawesome.min.css' media='all'/>
        <link rel='stylesheet' id='elementor-icons-fa-solid-css'
              href='./css/elementor-assets-lib-font-awesome-css-solid.min.css' media='all'/>
        <link rel='stylesheet' id='elementor-icons-fa-brands-css'
              href='./css/elementor-assets-lib-font-awesome-css-brands.min.css' media='all'/>
        <script src='./js/oxpins-assets-vendors-bootstrap-js-bootstrap.min.js' id='bootstrap-js'></script>
        <script src='./js/beaver-builder-lite-version-js-jquery.easing.min.js' id='jquery-easing-js'></script>
        <script src='./js/beaver-builder-lite-version-js-jquery.fitvids.min.js' id='jquery-fitvids-js'></script>
        <script src='./js/beaver-builder-lite-version-js-jquery.bxslider.min.js' id='jquery-bxslider-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-countdown-countdown.min.js' id='countdown-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-isotope-isotope.js' id='isotope-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-jarallax-jarallax.min.js' id='jarallax-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-jquery-ajaxchimp-jquery.ajaxchimp.min.js'
                id='jquery-ajaxchimp-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-jquery-appear-jquery.appear.min.js' id='jquery-appear-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-jquery-magnific-popup-jquery.magnific-popup.min.js'
                id='jquery-magnific-popup-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-jquery-circle-progress-jquery.circle-progress.min.js'
                id='jquery-circle-progress-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-odometer-odometer.min.js' id='odometer-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-owl-carousel-owl.carousel.min.js' id='owl-carousel-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-swiper-swiper.min.js' id='swiper-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-wow-wow.js' id='wow-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-jquery-tilt-tilt.jquery.min.js' id='jquery-tilt-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-sharer-sharer.min.js' id='sharer-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-circleType-jquery.circleType.js' id='circleType-js'></script>
        <script src='./js/oxpins-addon-assets-vendors-circleType-jquery.lettering.min.js' id='lettering-js'></script>
        <script src='./js/oxpins-addon-assets-js-oxpins-addon.js' id='oxpins-addon-script-js'></script>
        <script src='./js/elementor-assets-js-webpack.runtime.min.js' id='elementor-webpack-runtime-js'></script>
        <script src='./js/elementor-assets-js-frontend-modules.min.js' id='elementor-frontend-modules-js'></script>
        <script id='elementor-frontend-js-before'>
            var elementorFrontendConfig = {
                "environmentMode": {"edit": false, "wpPreview": false, "isScriptDebug": false},
                "i18n": {
                    "shareOnFacebook": "Share on Facebook",
                    "shareOnTwitter": "Share on Twitter",
                    "pinIt": "Pin it",
                    "download": "Download",
                    "downloadImage": "Download image",
                    "fullscreen": "Fullscreen",
                    "zoom": "Zoom",
                    "share": "Share",
                    "playVideo": "Play Video",
                    "previous": "Previous",
                    "next": "Next",
                    "close": "Close"
                },
                "is_rtl": false,
                "breakpoints": {"xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600},
                "responsive": {
                    "breakpoints": {
                        "mobile": {
                            "label": "Mobile",
                            "value": 767,
                            "default_value": 767,
                            "direction": "max",
                            "is_enabled": true
                        },
                        "mobile_extra": {
                            "label": "Mobile Extra",
                            "value": 880,
                            "default_value": 880,
                            "direction": "max",
                            "is_enabled": false
                        },
                        "tablet": {
                            "label": "Tablet",
                            "value": 1024,
                            "default_value": 1024,
                            "direction": "max",
                            "is_enabled": true
                        },
                        "tablet_extra": {
                            "label": "Tablet Extra",
                            "value": 1200,
                            "default_value": 1200,
                            "direction": "max",
                            "is_enabled": false
                        },
                        "laptop": {
                            "label": "Laptop",
                            "value": 1366,
                            "default_value": 1366,
                            "direction": "max",
                            "is_enabled": false
                        },
                        "widescreen": {
                            "label": "Widescreen",
                            "value": 2400,
                            "default_value": 2400,
                            "direction": "min",
                            "is_enabled": false
                        }
                    }
                },
                "version": "3.10.2",
                "is_static": false,
                "experimentalFeatures": {
                    "e_dom_optimization": true,
                    "e_optimized_assets_loading": true,
                    "e_optimized_css_loading": true,
                    "a11y_improvements": true,
                    "additional_custom_breakpoints": true,
                    "e_hidden_wordpress_widgets": true,
                    "landing-pages": true,
                    "kit-elements-defaults": true
                },
                "urls": {"assets": "http:\\/\\/localhost:8888\\/wordpress\\/wp-content\\/plugins\\/elementor\\/assets\\/"},
                "settings": {"page": [], "editorPreferences": []},
                "kit": {
                    "active_breakpoints": ["viewport_mobile", "viewport_tablet"],
                    "global_image_lightbox": "yes",
                    "lightbox_enable_counter": "yes",
                    "lightbox_enable_fullscreen": "yes",
                    "lightbox_enable_zoom": "yes",
                    "lightbox_enable_share": "yes",
                    "lightbox_title_src": "title",
                    "lightbox_description_src": "description"
                },
                "post": {"id": 10, "title": "Home%2001%20-%20Wokober", "excerpt": "", "featuredImage": false}
            };
        </script>
        <script src='./js/elementor-assets-js-frontend.min.js' id='elementor-frontend-js'></script>
        <script id='wp-util-js-extra'>
            var _wpUtilSettings = {"ajax": {"url": "\\/wordpress\\/wp-admin\\/admin-ajax.php"}};
        </script>
        <script id='wpforms-elementor-js-extra'>
            var wpformsElementorVars = {"captcha_provider": "recaptcha", "recaptcha_type": "v2"};
        </script>
        <script src='./js/wpforms-lite-assets-js-integrations-elementor-frontend.min.js' id='wpforms-elementor-js'></script>
        `
    }
}

customElements.define('app-navbar', Navbar)
customElements.define('app-footer', Footer)
customElements.define('app-scripts', Scripts)
customElements.define('app-headlinks', HeadLinks)
