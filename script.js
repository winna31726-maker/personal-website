/* ============================================
   JAVASCRIPT - INTERACTIVITY & FUNCTIONALITY
   ============================================ */

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .skill-category, .timeline-content, .portfolio-item').forEach(el => {
    observer.observe(el);
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.innerHTML = `
    section, .project-card, .skill-category, .timeline-content, .portfolio-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
            link.style.color = '#3498db';
        } else {
            link.style.color = '';
        }
    });
});

// Mobile menu toggle (if needed for mobile)
const menuBtn = document.querySelector('.menu-toggle');
if (menuBtn) {
    menuBtn.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
    });
}

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Video play/pause tracking
const videos = document.querySelectorAll('video');
videos.forEach(video => {
    video.addEventListener('play', function() {
        console.log('Video playing:', this.src);
    });
    
    video.addEventListener('pause', function() {
        console.log('Video paused:', this.src);
    });
});

// Smooth counter animation for stats (if added)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const updateCount = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target;
        }
    };
    
    updateCount();
}

// Contact form handling (if a form is added)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        
        // Placeholder for form submission
        console.log('Form submitted:', {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        });
        
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = 'Thank you! Your message has been sent.';
        this.appendChild(successMsg);
        
        this.reset();
        
        setTimeout(() => {
            successMsg.remove();
        }, 3000);
    });
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals if added
    }
    
    // Quick navigation with number keys
    if (e.ctrlKey || e.metaKey) {
        const navLinks = document.querySelectorAll('.nav-link');
        const num = parseInt(e.key);
        if (num > 0 && num <= navLinks.length) {
            navLinks[num - 1].click();
        }
    }
});

// Print friendly styles
window.addEventListener('beforeprint', function() {
    document.body.style.background = 'white';
});

// Detect if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// Dark mode toggle (optional feature)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Add dark mode styles dynamically
const darkModeStyles = `
    body.dark-mode {
        background-color: #1a1a1a;
        color: #e0e0e0;
    }
    
    body.dark-mode .navbar {
        background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
    }
    
    body.dark-mode section {
        background-color: #2a2a2a;
    }
    
    body.dark-mode .project-card,
    body.dark-mode .skill-category,
    body.dark-mode .timeline-content {
        background-color: #333333;
        color: #e0e0e0;
    }
    
    body.dark-mode .info-box {
        background-color: #333333;
    }
`;

// Performance optimization - throttle scroll events
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

// Throttled scroll handler
const throttledScroll = throttle(function() {
    // Your scroll event logic here
}, 100);

window.addEventListener('scroll', throttledScroll);

// Page visibility API - pause videos when tab is hidden
document.addEventListener('visibilitychange', function() {
    videos.forEach(video => {
        if (document.hidden) {
            video.pause();
        }
    });
});

// Add analytics tracking (optional)
function trackEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // Could be integrated with Google Analytics or similar
}

// Track section views
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            trackEvent('section_viewed', { section: entry.target.id });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Personal Website Loaded Successfully');
    
    // Add any initialization code here
    // For example, fetch data from an API
    // or initialize third-party libraries
});

// Export functions for global use if needed
window.PersonalWebsite = {
    toggleDarkMode: toggleDarkMode,
    trackEvent: trackEvent,
    animateCounter: animateCounter
};