class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- Main Header-->
            <header class="main-header">
        
                <!-- Header Upper -->
                <div class="header-upper">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="logo-column">
                                <div class="logo-box">
                                    <div class="logo">
                                        <a href="/" class="hero_logo">
                                            <img id="LogoId" class="logo_img" decoding="async" width="200" height="auto"
                                                 src="./images/img/Logo-01.png"
                                                 alt="Wokober Logo">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="right-column">
                                <div class="option-wrapper">
                                    <div class="nav-outer">
        
                                        <!-- Main Menu -->
                                        <nav class="main-menu navbar-expand-xl navbar-dark">
        
                                            <div class="collapse navbar-collapse">
                                                <ul class="navigation">
                                                    <li class="dropdown" id="about"><a href="#">About</a>
                                                        <ul class="hide-menu nav-submenu">
                                                    <li><a href="about.html">About Us</a></li>
                                                    <li><a href="about.html#team">Our Team</a></li>
                                                    <li><a href="gallery.html">Gallery</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropdown" id="tf"><a href="#">Toy Festivals</a>
                                                        <ul class="hide-menu nav-submenu">
                                                            <li><a href="tf-2022.html">TF 2022</a></li>
                                                            <li><a href="#">TF 2023</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="current" id="mp"><a href="mp-2023.html">Mentorship Programmes</a>
                                                        <!--                                                <ul>-->
                                                        <!--                                                    <li><a href="causes-1.html">Style 01 - Grid View</a></li>-->
                                                        <!--                                                </ul>-->
                                                    </li>
                                                    <li class="" id="get-involved"><a href="get_involved.html">Get Involved</a>
                                                        <!--                                                <ul>-->
                                                        <!--                                                    <li><a href="events-1.html">Events</a></li>-->
                                                        <!--                                                    <li><a href="event-details.html">Single Event</a></li>-->
                                                        <!--                                                </ul>-->
                                                    </li>
                                                    <li class="dropdown" id="blog"><a href="#">Blog</a>
                                                        <!--                                                <ul>-->
                                                        <!--                                                    <li><a href="blog.html">Classic Grid View</a></li>-->
                                                        <!--                                                    <li><a href="blog-fullwidth.html">Fullwidth Masonry</a></li>-->
                                                        <!--                                                    <li><a href="blog-list.html">List With Sidebar</a></li>-->
                                                        <!--                                                    <li><a href="blog-details.html">Single Post</a></li>-->
                                                        <!--                                                </ul>-->
                                                    </li>
                                                    <li id="contact"><a href="contact.html">Contact</a></li>
                                                </ul>
                                            </div>
                                        </nav><!-- Main Menu End-->
                                    </div>
                                    <div class="">
                                        <a href="donate.html" class="donate-button"><span>Donate</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--End Header Upper-->
        
                <!--End Header Upper-->
<!--                <div class="sticky-header">-->
<!--                    <div class="auto-container">-->
<!--                        <div class="wrapper-box">-->
<!--                            <div class="logo-column">-->
<!--                                <div class="logo-box">-->
<!--                                    <div class="logo"><a href="/" class="hero_logo">-->
<!--                                        <img id="LogoId" class="logo_img" decoding="async" width="150" height="50"-->
<!--                                             src="./images/img/Logo-01.png"-->
<!--                                             alt="Wokober Logo">-->
<!--                                    </a></div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="menu-column">-->
<!--                                <div class="nav-outer">-->
<!--        -->
<!--                                    <div class="nav-inner">-->
<!--        -->
<!--                                        &lt;!&ndash; Main Menu &ndash;&gt;-->
<!--                                        <nav class="main-menu navbar-expand-xl navbar-dark">-->
<!--        -->
<!--                                            <div class="collapse navbar-collapse">-->
<!--                                                <ul class="navigation">-->
<!--                                                </ul>-->
<!--                                            </div>-->
<!--                                        </nav>&lt;!&ndash; Main Menu End&ndash;&gt;-->
<!--        -->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
        
<!--                 Mobile Menu  -->
                <div class="mobile-menu style-one">
                    <div class="menu-box">
                        <div class="logo"><a href="/" class="hero_logo">
                            <img id="LogoId" class="logo_img" decoding="async" width="150" height="50"
                                 src="./images/img/Logo-01.png"
                                 alt="Wokober Logo">
                        </a></a>
                        </div>
                        
                             <div class="">
                                        <a href="donate.html" class="donate-button"><span>Donate</span></a>
                             </div>
                        <!-- Main Menu -->
                        <nav class="main-menu navbar-expand-xl navbar-dark">
                            <div class="navbar-header">
                                <!-- Toggle Button -->
                                <button type="button" class="navbar-toggle" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="flaticon-menu"></span>
                                </button>
                            </div>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navigation">
        
                                </ul>
                            </div>
                        </nav>
                        <!-- Main Menu End-->
                        <!--Search Box-->
                        
                    </div>
        
                </div>
<!--                 End Mobile Menu -->
        
                <div class="nav-overlay">
                    <div class="cursor"></div>
                    <div class="cursor-follower"></div>
                </div>
            </header>
            <!-- End Main Header -->
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
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


customElements.define('app-navbar', Navbar)
customElements.define('app-footer', Footer)
