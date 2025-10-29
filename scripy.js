// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === #${current}) {
            link.classList.add('active');
        }
    });
});

// Add animation to skill cards on hover
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.5s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.animation = '';
    });
});

// Add pulse animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1) translateY(-5px); }
        50% { transform: scale(1.05) translateY(-5px); }
    }
    
    nav a.active {
        color: #764ba2;
        font-weight: 700;
    }
`;
document.head.appendChild(style);

// Console message
console.log('Portfolio loaded successfully! 🚀');
console.log('Built by Harsh Sharma');