// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to sections and profile image on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Animate sections
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Animate profile image
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.style.transition = 'transform 0.3s ease';
        
        profileImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        profileImg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// Theme toggle functionality (light/dark mode)
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
themeToggle.classList.add('theme-toggle');
themeToggle.title = 'Toggle Dark Mode';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDarkMode ? 
        '<i class="fas fa-sun"></i>' : 
        '<i class="fas fa-moon"></i>';
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
});

// Check for saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Add dark mode styles
const darkModeStyles = `
    .dark-mode {
        --primary-color: #ecf0f1;
        --secondary-color: #3498db;
        --accent-color: #e74c3c;
        --text-color: #ecf0f1;
        --heading-color: #ffffff;
        --bg-color: #1a1a2e;
        --card-bg: #16213e;
        --border-color: #0f3460;
    }
    
    .dark-mode .timeline::before {
        background-color: #3498db;
    }
    
    .dark-mode .timeline-date {
        background-color: #3498db;
    }
    
    .dark-mode .project-card,
    .dark-mode .certification-item,
    .dark-mode .award-item {
        background-color: rgba(52, 152, 219, 0.1);
        border-color: #0f3460;
    }
    
    .dark-mode .section h2 {
        border-color: #0f3460;
    }
    
    .dark-mode .skill-category h3 {
        border-color: #0f3460;
    }
    
    .dark-mode .contact-info i {
        color: #3498db;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);

// Add print styles for better resume printing
const printStyles = `
    @media print {
        .header::before,
        .theme-toggle,
        .social-links,
        .footer {
            display: none;
        }
        
        .container {
            padding: 0;
        }
        
        .header,
        .section {
            box-shadow: none;
            border: 1px solid #ccc;
        }
        
        body {
            background-color: white;
        }
        
        .dark-mode {
            background-color: white;
            color: black;
        }
        
        .dark-mode .header,
        .dark-mode .section {
            background-color: white;
            color: black;
        }
    }
`;

const printStyleSheet = document.createElement("style");
printStyleSheet.innerText = printStyles;
document.head.appendChild(printStyleSheet);
