// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
});

// Typing Animation
const typedTextSpan = document.querySelector('.typed-text');
const textArray = ['Full Stack Web Developer', 'Machine Learning Specialist'];   
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 1000);
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Scroll Animation
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Project Cards Data
const projects = [
    {
        title: 'Portfolio Website',
        description: 'Personal portfolio website showcasing skills and projects',
        image: 'portfolio.png',
        category: 'web',
        github: 'https://github.com/yourusername/portfolio',
        view: 'https://rathod-protfolio.netlify.app/'
    },
    {
        title: 'Spotify Clone',
        description: 'A music streaming application clone',
        image: 'spotify.webp',
        category: 'web',
        github: 'https://github.com/rathod-santosh/spotify-clone',
        view: 'https://spotifyyy-clonnnnnnnnnne.netlify.app/'
    },
    {
        title: 'Smart Parking System',
        description: 'IoT-based parking management system',
        image: 'Smart-Parking-Systems.webp',
        category: 'other',
        github: 'https://github.com/rathod-santosh/smart-parking',
        view: 'https://spotifyyy-clonnnnnnnnnne.netlify.app/'
    },
    {
        title: 'Todo Application',
        description: 'Task management application',
        image: 'to-do.jpeg',
        category: 'app',
        github: 'https://github.com/yourusername/todo-app',
        view: 'https://yourwebsite.com/todo-app'
    },
    {
        title: 'Simon Game',
        description: 'Memory skill game implementation',
        image: 'simon.webp',
        category: 'web',
        github: 'https://github.com/rathod-santosh/Simmmon',
        view: 'https://teal-lizbeth-82.tiiny.site/'
    },
    {
        title: 'Travel Planner',
        description: 'Travel itinerary planning application',
        image: 'travel.jpg',
        category: 'app',
        github: 'https://github.com/rathod-santosh/hotel-project',
        view: 'https://hotel-project-jxdf.onrender.com/listings'
    }
];

// Populate Project Grid
function populateProjects(category = 'all') {
    const projectGrid = document.querySelector('.project-grid');
    projectGrid.innerHTML = '';

    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter(project => project.category === category);

    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-buttons">
                    <a href="${project.github}" target="_blank" class="btn github-btn">GitHub</a>
                    <a href="${project.view}" target="_blank" class="btn view-btn">View</a>
                </div>
            </div>
        `;
        projectGrid.appendChild(card);
    });
}

// Project Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        populateProjects(btn.dataset.filter);
    });
});

// Initialize Projects
populateProjects();
