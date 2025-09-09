// Infinite, seamless wrap fix
class SmoothCarousel {
    constructor(container, options = {}) {
      this.container = document.querySelector(container);
      this.dots = document.querySelectorAll('.project-slider-dot');

      this.currentIndex = 0;         // will be set to 1 after cloning
      this.isTransitioning = false;

      this.config = {
        autoplay: options.autoplay !== false,
        autoplayDelay: options.autoplayDelay || 8000,
        transitionDuration: options.transitionDuration || 600,
        easing: options.easing || 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        ...options
      };

      this.init();
    }

    init() {
      if (!this.container) return;

      // collect real slides once
      this.realSlides = Array.from(this.container.querySelectorAll('.custom_project_details_right'));
      if (this.realSlides.length === 0) return;

      this.totalReal = this.realSlides.length;
      this.setupCarousel();
      this.setupEventListeners();
      this.updateDots();

      if (this.config.autoplay) this.startAutoplay();
    }

    setupCarousel() {
      // wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'carousel-wrapper';
      wrapper.style.cssText = `
        display: flex;
        transition: transform ${this.config.transitionDuration}ms ${this.config.easing};
        will-change: transform;
      `;

      // clone last -> front, real slides, clone first -> end
      const firstClone = this.realSlides[0].cloneNode(true);
      firstClone.classList.add('is-clone');
      const lastClone = this.realSlides[this.totalReal - 1].cloneNode(true);
      lastClone.classList.add('is-clone');

      wrapper.appendChild(lastClone);
      this.realSlides.forEach(s => wrapper.appendChild(s));
      wrapper.appendChild(firstClone);

      // mount
      this.container.innerHTML = '';
      this.container.style.cssText = `overflow: hidden; position: relative; height: auto;`;
      this.container.appendChild(wrapper);
      this.wrapper = wrapper;

      // now our "slides" include clones
      this.slides = Array.from(this.wrapper.children);
      this.totalSlides = this.slides.length; // totalReal + 2
      const slideWidthPct = 100 / this.totalSlides;

      // width + per-slide styling
      this.wrapper.style.width = `${this.totalSlides * 100}%`;
      this.slides.forEach((slide, i) => {
        slide.style.cssText = `
          flex: 0 0 ${slideWidthPct}%;
          opacity: ${i === 1 ? 1 : 0};
          transition: opacity ${this.config.transitionDuration}ms ${this.config.easing};
        `;
      });

      // start on the first REAL slide (index 1)
      this.currentIndex = 1;
      this.jumpWithoutTransition(this.currentIndex);
    }

    setupEventListeners() {
      // dots (map real index -> wrapped index+1)
      this.dots.forEach((dot, realIndex) => {
        dot.addEventListener('click', () => {
          if (!this.isTransitioning) this.goToSlide(realIndex);
        });
      });

      // swipe
      let startX = 0, currentX = 0, isDragging = false;
      this.container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX; isDragging = true; this.pauseAutoplay();
      }, { passive: true });
      this.container.addEventListener('touchmove', (e) => {
        if (!isDragging) return; currentX = e.touches[0].clientX;
      }, { passive: true });
      this.container.addEventListener('touchend', () => {
        if (!isDragging) return;
        const diff = startX - currentX;
        if (Math.abs(diff) > 50) this.nextSlide(); // forward only, as you had
        isDragging = false; this.startAutoplay();
      }, { passive: true });

      // hover pause
      this.container.addEventListener('mouseenter', () => this.pauseAutoplay());
      this.container.addEventListener('mouseleave', () => this.startAutoplay());

      // keyboard (forward only)
      document.addEventListener('keydown', (e) => {
        if (this.container.matches(':hover') && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
          e.preventDefault(); this.nextSlide();
        }
      });

      // tab hidden
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) this.pauseAutoplay(); else this.startAutoplay();
      });

      // **core of the seamless loop**: after an animated move to a clone, snap to the real slide
      this.wrapper.addEventListener('transitionend', () => {
        // Use requestAnimationFrame to ensure smooth transition
        requestAnimationFrame(() => {
          // at the end clone? (i.e., moved from last real to first clone)
          if (this.currentIndex === this.totalSlides - 1) {
            this.currentIndex = 1;                 // real first
            this.jumpWithoutTransition(this.currentIndex);
          }
          // at the start clone? (only matters if you ever go backwards)
          if (this.currentIndex === 0) {
            this.currentIndex = this.totalReal;    // real last
            this.jumpWithoutTransition(this.currentIndex);
          }
          this.isTransitioning = false;
          this.updateDots();
          this.updateSlideOpacity();
        });
      });
    }

    goToSlide(realIndex) {
      // realIndex: 0..totalReal-1
      if (this.isTransitioning) return;
      const target = realIndex + 1; // offset because of the leading clone
      if (target === this.currentIndex) return;

      this.isTransitioning = true;
      this.currentIndex = target;
      this.enableTransition();
      this.updateSlidePosition();
      this.updateSlideOpacity();
    }

    nextSlide() {
      if (this.isTransitioning) return;
      this.isTransitioning = true;
      this.enableTransition();
      this.currentIndex += 1; // can land on last index (first-clone)
      this.updateSlidePosition();
      this.updateSlideOpacity();
    }

    // If you ever decide to allow backward movement:
    prevSlide() {
      if (this.isTransitioning) return;
      this.isTransitioning = true;
      this.enableTransition();
      this.currentIndex -= 1; // can land on 0 (last-clone)
      this.updateSlidePosition();
      this.updateSlideOpacity();
    }

    updateSlidePosition() {
      const translateX = -(this.currentIndex * (100 / this.totalSlides));
      this.wrapper.style.transform = `translateX(${translateX}%)`;
    }

    updateSlideOpacity() {
      // Opacity by current visible index
      this.slides.forEach((slide, i) => {
        slide.style.opacity = i === this.currentIndex ? '1' : '0';
      });
    }

    updateDots() {
      // Map wrapped index back to real index
      const realIndex = (this.currentIndex - 1 + this.totalReal) % this.totalReal;
      this.dots.forEach((dot, i) => dot.classList.toggle('active', i === realIndex));
    }

    startAutoplay() {
      if (!this.config.autoplay) return;
      this.pauseAutoplay();
      this.autoplayTimer = setInterval(() => this.nextSlide(), this.config.autoplayDelay);
    }

    pauseAutoplay() {
      if (this.autoplayTimer) clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }

    // helpers to toggle transition cleanly
    disableTransition() {
      this.wrapper.style.transition = 'none';
    }
    enableTransition() {
      this.wrapper.style.transition = `transform ${this.config.transitionDuration}ms ${this.config.easing}`;
    }
    jumpWithoutTransition(index) {
      // Temporarily hide the wrapper to prevent flicker
      this.wrapper.style.visibility = 'hidden';
      this.disableTransition();
      
      // Double requestAnimationFrame for smoother transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.currentIndex = index;
          this.updateSlidePosition();
          
          // Restore visibility and transition after position is set
          requestAnimationFrame(() => {
            this.wrapper.style.visibility = 'visible';
            this.enableTransition();
          });
        });
      });
    }

    destroy() {
      this.pauseAutoplay();
      // TODO: remove listeners if you need teardown
    }
  }

  // init
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
      const projectCarousel = new SmoothCarousel('.project-slider', {
        autoplay: true,
        autoplayDelay: 8000,
        transitionDuration: 600,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      });
      window.projectCarousel = projectCarousel;
    }, 100);
  });
