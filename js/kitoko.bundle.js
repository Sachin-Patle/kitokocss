/**
 * KitokoCSS v1.0 - JavaScript Compagnon
 * Framework développé par FomaDev
 * Publié le 27 novembre 2025
 */

(function(window) {
  'use strict';

  const kitoko = {
    // ============================================
    // Modal Component
    // ============================================
    Modal: class {
      constructor(element, options = {}) {
        this.element = typeof element === 'string' ? document.querySelector(element) : element;
        this.options = {
          backdrop: options.backdrop !== undefined ? options.backdrop : true,
          keyboard: options.keyboard !== undefined ? options.keyboard : true,
          focus: options.focus !== undefined ? options.focus : true,
          ...options
        };
        this.isShown = false;
        this.backdrop = null;
        this.focusedElement = null;
        this.init();
      }

      init() {
        if (!this.element) return;
        this.setupEventListeners();
      }

      setupEventListeners() {
        const triggers = document.querySelectorAll(`[data-kt-toggle="modal"][data-kt-target="${this.element.id}"]`);
        triggers.forEach(trigger => {
          trigger.addEventListener('click', (e) => {
            e.preventDefault();
            this.show();
          });
        });

        const closeButtons = this.element.querySelectorAll('[data-kt-dismiss="modal"]');
        closeButtons.forEach(btn => {
          btn.addEventListener('click', () => this.hide());
        });

        if (this.options.keyboard) {
          document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isShown) {
              this.hide();
            }
          });
        }
      }

      show() {
        if (this.isShown) return;
        
        this.focusedElement = document.activeElement;
        this.isShown = true;
        this.element.classList.add('show');
        document.body.classList.add('kt-modal-open');

        if (this.options.backdrop) {
      this.createBackdrop();
    }

        if (this.options.focus) {
          this.trapFocus();
        }

        // Trigger custom event
        const showEvent = new CustomEvent('kt:modal:show', { bubbles: true });
        this.element.dispatchEvent(showEvent);
      }

      hide() {
        if (!this.isShown) return;

        this.isShown = false;
        this.element.classList.remove('show');
        document.body.classList.remove('kt-modal-open');

        if (this.backdrop) {
          this.removeBackdrop();
        }

        if (this.focusedElement) {
          this.focusedElement.focus();
        }

        // Trigger custom event
        const hideEvent = new CustomEvent('kt:modal:hide', { bubbles: true });
        this.element.dispatchEvent(hideEvent);
      }

      createBackdrop() {
        this.backdrop = document.createElement('div');
        this.backdrop.className = 'kt-modal-backdrop fade';
        document.body.appendChild(this.backdrop);

        setTimeout(() => {
          this.backdrop.classList.add('show');
        }, 10);

        this.backdrop.addEventListener('click', () => {
          if (this.options.backdrop === true) {
            this.hide();
          }
        });
      }

      removeBackdrop() {
        if (this.backdrop) {
          this.backdrop.classList.remove('show');
          setTimeout(() => {
            if (this.backdrop && this.backdrop.parentNode) {
              this.backdrop.parentNode.removeChild(this.backdrop);
            }
            this.backdrop = null;
          }, 150);
        }
      }

      trapFocus() {
        const focusableElements = this.element.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (firstElement) {
          firstElement.focus();
        }

        this.element.addEventListener('keydown', (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
              }
            } else {
              if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
              }
            }
          }
        });
      }
    },

    // ============================================
    // Navbar Toggler Component
    // ============================================
    Toggler: class {
      constructor(element) {
        this.element = typeof element === 'string' ? document.querySelector(element) : element;
        this.target = null;
        this.isExpanded = false;
        this.init();
      }

      init() {
        if (!this.element) return;
        const targetId = this.element.getAttribute('data-kt-target');
        if (targetId) {
          this.target = document.querySelector(targetId);
        }
        this.setupEventListeners();
      }

      setupEventListeners() {
        this.element.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggle();
        });
      }

      toggle() {
        if (!this.target) return;
        
        this.isExpanded = !this.isExpanded;
        this.target.classList.toggle('show');
        this.element.setAttribute('aria-expanded', this.isExpanded);
      }

      show() {
        if (!this.target) return;
        this.isExpanded = true;
        this.target.classList.add('show');
        this.element.setAttribute('aria-expanded', 'true');
      }

      hide() {
        if (!this.target) return;
        this.isExpanded = false;
        this.target.classList.remove('show');
        this.element.setAttribute('aria-expanded', 'false');
      }
    },

    // ============================================
    // Alert Dismissible Component
    // ============================================
    Alert: class {
      constructor(element) {
        this.element = typeof element === 'string' ? document.querySelector(element) : element;
        this.init();
      }

      init() {
        if (!this.element) return;
        const closeButton = this.element.querySelector('.kt-close');
        if (closeButton) {
          closeButton.addEventListener('click', () => this.close());
        }
      }

      close() {
        this.element.style.transition = 'opacity 0.15s linear';
        this.element.style.opacity = '0';
        setTimeout(() => {
          if (this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
          }
        }, 150);
      }
    },

    // ============================================
    // Carousel Component
    // ============================================
    Carousel: class {
      constructor(element, options = {}) {
        this.element = typeof element === 'string' ? document.querySelector(element) : element;
        this.options = {
          interval: options.interval || 5000,
          keyboard: options.keyboard !== undefined ? options.keyboard : true,
          pause: options.pause || 'hover',
          wrap: options.wrap !== undefined ? options.wrap : true,
          ...options
        };
        this.currentIndex = 0;
        this.items = [];
        this.indicators = [];
        this.interval = null;
        this.isPaused = false;
        this.init();
      }

      init() {
        if (!this.element) return;
        this.items = Array.from(this.element.querySelectorAll('.kt-carousel-item'));
        this.indicators = Array.from(this.element.querySelectorAll('.kt-carousel-indicators li'));
        this.setupEventListeners();
        this.setActiveItem(0);
        if (this.options.interval) {
          this.cycle();
        }
      }

      setupEventListeners() {
        const prevButton = this.element.querySelector('.kt-carousel-control-prev');
        const nextButton = this.element.querySelector('.kt-carousel-control-next');

        if (prevButton) {
          prevButton.addEventListener('click', () => this.prev());
        }

        if (nextButton) {
          nextButton.addEventListener('click', () => this.next());
        }

        if (this.options.keyboard) {
          this.element.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
          });
        }

        if (this.options.pause === 'hover') {
          this.element.addEventListener('mouseenter', () => this.pause());
          this.element.addEventListener('mouseleave', () => this.cycle());
        }

        this.indicators.forEach((indicator, index) => {
          indicator.addEventListener('click', () => this.to(index));
        });
      }

      setActiveItem(index) {
        this.items.forEach((item, i) => {
          item.classList.toggle('active', i === index);
        });
        this.indicators.forEach((indicator, i) => {
          indicator.classList.toggle('active', i === index);
        });
        this.currentIndex = index;
      }

      next() {
        let nextIndex = this.currentIndex + 1;
        if (nextIndex >= this.items.length) {
          nextIndex = this.options.wrap ? 0 : this.items.length - 1;
        }
        this.to(nextIndex);
      }

      prev() {
        let prevIndex = this.currentIndex - 1;
        if (prevIndex < 0) {
          prevIndex = this.options.wrap ? this.items.length - 1 : 0;
        }
        this.to(prevIndex);
      }

      to(index) {
        if (index < 0 || index >= this.items.length) return;
        this.setActiveItem(index);
      }

      cycle() {
        this.interval = setInterval(() => {
          if (!this.isPaused) {
            this.next();
          }
        }, this.options.interval);
      }

      pause() {
        this.isPaused = true;
        if (this.interval) {
          clearInterval(this.interval);
        }
      }
    },

    // ============================================
    // Toast Component
    // ============================================
    Toast: class {
      constructor(element, options = {}) {
        this.element = typeof element === 'string' ? document.querySelector(element) : element;
        this.options = {
          autohide: options.autohide !== undefined ? options.autohide : true,
          delay: options.delay || 5000,
          ...options
        };
        this.init();
      }

      init() {
        if (!this.element) return;
        const closeButton = this.element.querySelector('.kt-close');
        if (closeButton) {
          closeButton.addEventListener('click', () => this.hide());
        }
        this.show();
      }

      show() {
        this.element.classList.add('show');
        if (this.options.autohide) {
          setTimeout(() => this.hide(), this.options.delay);
        }
      }

      hide() {
        this.element.classList.remove('show');
        this.element.classList.add('hide');
        setTimeout(() => {
          if (this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
          }
        }, 300);
      }
    },

    // ============================================
    // Sticky Navbar
    // ============================================
    StickyNavbar: class {
      constructor(element, options = {}) {
        this.element = typeof element === 'string' ? document.querySelector(element) : element;
        this.options = {
          offset: options.offset || 0,
          ...options
        };
        this.isSticky = false;
        this.init();
      }

      init() {
        if (!this.element) return;
        window.addEventListener('scroll', () => this.handleScroll());
        this.handleScroll();
      }

      handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const shouldBeSticky = scrollTop > this.options.offset;

        if (shouldBeSticky && !this.isSticky) {
          this.element.classList.add('kt-navbar-sticky');
          this.isSticky = true;
        } else if (!shouldBeSticky && this.isSticky) {
          this.element.classList.remove('kt-navbar-sticky');
          this.isSticky = false;
        }
      }
    },

    // ============================================
    // Initialization
    // ============================================
    init() {
      // Initialize Modals
      document.querySelectorAll('.kt-modal').forEach(modal => {
        new kitoko.Modal(modal);
      });

      // Initialize Navbar Togglers
      document.querySelectorAll('[data-kt-toggle="collapse"]').forEach(toggler => {
        new kitoko.Toggler(toggler);
      });

      // Initialize Alerts
      document.querySelectorAll('.kt-alert-dismissible').forEach(alert => {
        new kitoko.Alert(alert);
      });

      // Initialize Carousels
      document.querySelectorAll('.kt-carousel').forEach(carousel => {
        new kitoko.Carousel(carousel);
      });

      // Initialize Toasts
      document.querySelectorAll('.kt-toast').forEach(toast => {
        new kitoko.Toast(toast);
      });

      // Initialize Sticky Navbars
      document.querySelectorAll('.kt-navbar[data-kt-sticky]').forEach(navbar => {
        new kitoko.StickyNavbar(navbar);
      });
    }
  };

  // Expose to window
  window.kitoko = kitoko;

  // Auto-initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => kitoko.init());
  } else {
    kitoko.init();
  }

})(window);

