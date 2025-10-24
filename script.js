// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const navigation = document.getElementById('navigation');
const mobileToggle = document.getElementById('mobileToggle');
const pitchBtn = document.getElementById('pitchBtn');
const pitchModal = document.getElementById('pitchModal');
const pitchClose = document.getElementById('pitchClose');
const pitchPrev = document.getElementById('pitchPrev');
const pitchNext = document.getElementById('pitchNext');
const currentSlideSpan = document.getElementById('currentSlide');
const contactForm = document.getElementById('contactForm');

// State
let currentSlide = 0;
const totalSlides = 3;
let lastScrollY = 0;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Hide loading screen after a short delay
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);

    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize pitch modal
    initPitchModal();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize counters
    initCounters();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize scroll effects
    initScrollEffects();
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add scroll animation class to elements
    const animateElements = document.querySelectorAll('.service-card, .work-item, .about-text, .about-stats, .contact-text, .contact-form');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// Navigation
function initNavigation() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .footer-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Effects
function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Hide/show navigation on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navigation.classList.add('hidden');
        } else {
            navigation.classList.remove('hidden');
        }
        
        lastScrollY = currentScrollY;
        
        // Parallax effect for floating elements
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.2);
            const yPos = -(currentScrollY * speed);
            element.style.transform = `translateY(${yPos}px) rotate(${currentScrollY * 0.1}deg)`;
        });
    });
}

// Pitch Modal
function initPitchModal() {
    const slides = document.querySelectorAll('.pitch-slide');
    
    // Open modal
    pitchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        pitchModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close modal
    pitchClose.addEventListener('click', () => {
        closePitchModal();
    });
    
    // Close modal on outside click
    pitchModal.addEventListener('click', (e) => {
        if (e.target === pitchModal) {
            closePitchModal();
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && pitchModal.classList.contains('active')) {
            closePitchModal();
        }
    });
    
    // Navigation
    pitchPrev.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    });
    
    pitchNext.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlide();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (pitchModal.classList.contains('active')) {
            if (e.key === 'ArrowLeft' && currentSlide > 0) {
                currentSlide--;
                updateSlide();
            } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
                currentSlide++;
                updateSlide();
            }
        }
    });
    
    function updateSlide() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        
        currentSlideSpan.textContent = currentSlide + 1;
        
        // Update navigation buttons
        pitchPrev.disabled = currentSlide === 0;
        pitchNext.disabled = currentSlide === totalSlides - 1;
    }
    
    function closePitchModal() {
        pitchModal.classList.remove('active');
        document.body.style.overflow = '';
        currentSlide = 0;
        updateSlide();
    }
    
    // Initialize first slide
    updateSlide();
}

// Contact Form
function initContactForm() {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Show success message
            showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Counters Animation
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        element.textContent = Math.floor(current);
        
        // Add % symbol if needed
        if (element.getAttribute('data-count') === '98') {
            element.textContent = Math.floor(current) + '%';
        }
    }, 16);
}

// Smooth Scrolling
function initSmoothScrolling() {
    // Smooth scroll for CTA buttons
    const ctaButtons = document.querySelectorAll('.hero-cta .btn');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile Menu
function initMobileMenu() {
    let isMenuOpen = false;
    
    mobileToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        // Toggle menu animation
        const spans = mobileToggle.querySelectorAll('span');
        if (isMenuOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
        
        // Create/remove mobile menu
        let mobileMenu = document.querySelector('.mobile-menu');
        
        if (isMenuOpen && !mobileMenu) {
            mobileMenu = createMobileMenu();
            document.body.appendChild(mobileMenu);
            setTimeout(() => mobileMenu.classList.add('active'), 10);
        } else if (!isMenuOpen && mobileMenu) {
            mobileMenu.classList.remove('active');
            setTimeout(() => {
                if (mobileMenu.parentNode) {
                    mobileMenu.parentNode.removeChild(mobileMenu);
                }
            }, 300);
        }
    });
}

function createMobileMenu() {
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    
    const menuContent = `
        <div class="mobile-menu-content">
            <nav class="mobile-nav">
                <a href="#about" class="mobile-nav-link">Sobre</a>
                <a href="#services" class="mobile-nav-link">Serviços</a>
                <a href="#work" class="mobile-nav-link">Trabalhos</a>
                <a href="#contact" class="mobile-nav-link">Contato</a>
            </nav>
            <div class="mobile-cta">
                <a href="#pitch" class="btn btn--primary" id="mobilePitchBtn">Ver Deck</a>
            </div>
        </div>
    `;
    
    mobileMenu.innerHTML = menuContent;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .mobile-menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.95);
            z-index: 1500;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .mobile-menu.active {
            opacity: 1;
            visibility: visible;
        }
        
        .mobile-menu-content {
            text-align: center;
            transform: translateY(50px);
            transition: transform 0.3s ease;
        }
        
        .mobile-menu.active .mobile-menu-content {
            transform: translateY(0);
        }
        
        .mobile-nav {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-bottom: 3rem;
        }
        
        .mobile-nav-link {
            color: white;
            text-decoration: none;
            font-size: 1.5rem;
            font-weight: 500;
            transition: color 0.3s ease;
        }
        
        .mobile-nav-link:hover {
            color: var(--color-accent);
        }
    `;
    
    document.head.appendChild(style);
    
    // Add event listeners
    const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu
                mobileMenu.classList.remove('active');
                setTimeout(() => {
                    if (mobileMenu.parentNode) {
                        mobileMenu.parentNode.removeChild(mobileMenu);
                    }
                }, 300);
                
                // Reset mobile toggle
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                
                // Scroll to target
                const offsetTop = targetElement.offsetTop - 80;
                setTimeout(() => {
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        });
    });
    
    // Mobile pitch button
    const mobilePitchBtn = mobileMenu.querySelector('#mobilePitchBtn');
    mobilePitchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Close mobile menu
        mobileMenu.classList.remove('active');
        setTimeout(() => {
            if (mobileMenu.parentNode) {
                mobileMenu.parentNode.removeChild(mobileMenu);
            }
        }, 300);
        
        // Reset mobile toggle
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
        
        // Open pitch modal
        setTimeout(() => {
            pitchModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 300);
    });
    
    return mobileMenu;
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: white;
            color: #333;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            z-index: 3000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 300px;
            border-left: 4px solid #4CAF50;
        }
        
        .notification--success {
            border-left-color: #4CAF50;
        }
        
        .notification--error {
            border-left-color: #f44336;
        }
        
        .notification--info {
            border-left-color: #2196F3;
        }
        
        .notification.show {
            transform: translateX(0);
        }
    `;
    
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimizations
const debouncedScrollHandler = debounce(() => {
    // Handle scroll events that don't need to be super responsive
}, 100);

const throttledScrollHandler = throttle(() => {
    // Handle scroll events that need to be responsive
}, 16);

// Add scroll listeners with performance optimizations
window.addEventListener('scroll', throttledScrollHandler);
window.addEventListener('scroll', debouncedScrollHandler);

// Preload critical resources
function preloadResources() {
    const criticalImages = [
        // Add any critical images here
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadResources();

// Add error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // You could send this to an error tracking service
});

// Add performance monitoring
window.addEventListener('load', () => {
    // Log performance metrics
    if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        console.log(`Page load time: ${loadTime}ms`);
    }
});

// Service Worker registration (for future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}