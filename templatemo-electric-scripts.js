// JavaScript Document

/*

TemplateMo 596 Electric Xtra

https://templatemo.com/tm-596-electric-xtra

*/

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';

        // Randomly assign orange or blue color
        if (Math.random() > 0.5) {
            particle.style.setProperty('--particle-color', '#00B2FF');
            particle.style.background = '#00B2FF';
        }

        particlesContainer.appendChild(particle);
    }
}

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Active navigation highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(item => item.classList.remove('active'));
            const currentNav = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (currentNav) currentNav.classList.add('active');
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    updateActiveNav();
});

// Initial active nav update
updateActiveNav();

// Smooth scrolling for navigation links
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

// Feature tabs functionality
const tabs = document.querySelectorAll('.tab-item');
const panels = document.querySelectorAll('.content-panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');

        // Remove active class from all tabs and panels
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        // Add active class to clicked tab and corresponding panel
        tab.classList.add('active');
        const panel = document.getElementById(tabId);
        if (panel) panel.classList.add('active');
    });
});

// Removed AJAX form submission to allow standard HTML FormSubmit handling

// Initialize particles
createParticles();

// Text rotation with character animation
const textSets = document.querySelectorAll('.text-set');
let currentIndex = 0;
let isAnimating = false;

function wrapTextInSpans(element) {
    const text = element.textContent;
    element.innerHTML = text.split('').map((char, i) =>
        `<span class="char" style="animation-delay: ${i * 0.05}s">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');
}

function animateTextIn(textSet) {
    const glitchText = textSet.querySelector('.glitch-text');
    const subtitle = textSet.querySelector('.subtitle');

    wrapTextInSpans(glitchText);
    glitchText.setAttribute('data-text', glitchText.textContent);

    setTimeout(() => {
        subtitle.classList.add('visible');
    }, 800);
}

function animateTextOut(textSet) {
    const chars = textSet.querySelectorAll('.char');
    const subtitle = textSet.querySelector('.subtitle');

    chars.forEach((char, i) => {
        char.style.animationDelay = `${i * 0.02}s`;
        char.classList.add('out');
    });

    subtitle.classList.remove('visible');
}

function rotateText() {
    if (isAnimating) return;
    if (!textSets || textSets.length === 0) return;

    isAnimating = true;

    const currentSet = textSets[currentIndex];
    const nextIndex = (currentIndex + 1) % textSets.length;
    const nextSet = textSets[nextIndex];

    animateTextOut(currentSet);

    setTimeout(() => {
        currentSet.classList.remove('active');
        nextSet.classList.add('active');
        animateTextIn(nextSet);

        currentIndex = nextIndex;
        isAnimating = false;
    }, 600);
}

// Initialize first text set safely
if (textSets && textSets.length > 0) {
    textSets[0].classList.add('active');
    animateTextIn(textSets[0]);
}

// Certificate Modal Functions
function toggleCert(headerElement) {
    const bodyElement = headerElement.nextElementSibling;
    const icon = headerElement.querySelector('.cert-toggle-icon');
    
    // Toggle the open class
    bodyElement.classList.toggle('open');
    
    // Update icon
    if (bodyElement.classList.contains('open')) {
        icon.textContent = '-';
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
    }
}

const certificateData = {
    'cisco-packet-tracer': {
        title: 'Cisco Packet Tracer Certificate',
        image: './cisco-packet-tracer.jpeg',
        description: 'This certificate was awarded by Cisco Networking Academy for successfully completing the course “Getting Started with Cisco Packet Tracer.” The certification demonstrates foundational knowledge in network simulation, packet tracing, and basic networking concepts using Cisco tools. This achievement reflects practical understanding of networking environments and troubleshooting techniques. 🌐📡'
    },
    'advanced-diploma': {
        title: 'Advanced Diploma in Computer Programming',
        image: './presentation2.jpeg',
        description: 'This certificate was awarded by Tamilnadu Rural Computer Education Enhancement Scheme (TRCES) for successfully completing the Advanced Diploma in Computer Programming course conducted at Cadd Cae Computers, Bodinayakkanur. The program covered programming fundamentals, software development concepts, database management, and practical computer applications. This certification represents dedication toward technical and professional skill development. 💻🎓'
    },
    'ibm-sql': {
        title: 'IBM SQL Certificate',
        image: './ibm-sql-querying-databases.jpeg',
        description: 'This certificate was awarded by IBM through Coursera for successfully completing the course “SQL: A Practical Introduction for Querying Databases.” The course provided hands-on experience in database querying, SQL commands, data filtering, joins, and relational database concepts. This achievement highlights strong foundational knowledge in database management and data handling. 🗄️📊'
    },
    'oracle-java-foundations': {
        title: 'Oracle Java Foundations Certificate',
        image: './oracle-java-foundations.jpeg',
        description: 'This certificate was awarded by Oracle through Coursera for successfully completing the course “Oracle Java Foundations.” The course focused on Java programming basics, object-oriented concepts, problem-solving techniques, and application development. This certification demonstrates a solid understanding of core Java programming principles. ☕💡'
    },
    'jdbc-introduction': {
        title: 'JDBC Introduction Certificate',
        image: './jdbc-introduction.jpeg',
        description: 'This certificate was awarded by LearnQuest through Coursera for successfully completing the course “Java Database Connectivity (JDBC) Introduction.” The course covered Java database integration, JDBC architecture, SQL execution through Java, and database-driven application development. This achievement reflects practical skills in connecting applications with databases. 🔗🗃️'
    },
    'core-java-multithreading': {
        title: 'Core Java Multithreading Certificate',
        image: './core-java-multithreading-classes.jpeg',
        description: 'This certificate was awarded by LearnKartS through Coursera for successfully completing the course “Core Java - Multithreading and Classes.” The course focused on Java multithreading concepts, class structures, synchronization, and concurrent programming techniques. This certification demonstrates advanced understanding of efficient Java application development. ⚙️☕'
    },
    'ibm-networking-storage': {
        title: 'IBM Networking and Storage Certificate',
        image: './ibm-networking-storage.jpeg',
        description: 'This certificate was awarded by IBM through Coursera for successfully completing the course “Introduction to Networking and Storage.” The course introduced networking fundamentals, storage technologies, data communication concepts, and system infrastructure management. This achievement highlights foundational IT and networking knowledge. 🌐💾'
    },
    'kgisl-dbms-security': {
        title: 'KGiSL DBMS and Security Certificate',
        image: './kgisl-dbms-security.jpeg',
        description: 'This certificate was awarded by KGiSL Educational Institutions through Coursera for successfully completing the course “Database Management Systems and Security.” The course covered database concepts, data security, access control, and secure information management practices. This certification demonstrates awareness of secure database administration and cybersecurity fundamentals. 🔒🗄️'
    },
    'meta-advanced-mysql': {
        title: 'Meta Advanced MySQL Certificate',
        image: './meta-advanced-mysql.jpeg',
        description: 'This certificate was awarded by Meta through Coursera for successfully completing the course “Advanced MySQL Topics.” The course focused on advanced database operations, indexing, optimization, stored procedures, and efficient data management techniques using MySQL. This achievement reflects strong practical database management skills. 📊🐬'
    },
    'microsoft-operating-systems-security': {
        title: 'Microsoft Operating Systems & Security Certificate',
        image: './microsoft-operating-systems-security.jpeg',
        description: 'This certificate was awarded by Microsoft through Coursera for successfully completing the course “Introduction to Computers and Operating Systems and Security.” The course introduced computer fundamentals, operating system concepts, system security, and safe computing practices. This certification represents foundational knowledge in computer systems and cybersecurity. 🖥️🔐'
    }
};

function openCertModal(certId) {
    const data = certificateData[certId];
    if (!data) return;

    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('certImage');
    const modalTitle = document.getElementById('certModalTitle');
    const modalDesc = document.getElementById('certModalDescription');

    modalTitle.textContent = data.title;
    modalDesc.textContent = data.description;
    modalImg.src = data.image;
    modalImg.style.display = 'block';

    modalImg.onerror = function () {
        modalImg.style.display = 'none';
        modalDesc.textContent = data.description + ' (Certificate image not found. Please add the matching image file to the portfolio folder.)';
    };

    modalImg.onload = function () {
        modalImg.style.display = 'block';
    };

    modal.style.display = 'flex';
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    modal.style.display = 'none';
}

// Open each certificate modal when its View Certificate button is clicked
const certLinks = document.querySelectorAll('.view-cert-link');
certLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const certId = this.dataset.certId;
        openCertModal(certId);
    });
});

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('certModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Contact Form AJAX Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitBtn');
        const statusDiv = document.getElementById('formStatus');
        
        // Change button state
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;
        
        // Collect data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        fetch(contactForm.action, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            statusDiv.style.display = 'block';
            if (data.success === "true" || data.success === true || (data.message && data.message.includes("success"))) {
                statusDiv.style.color = '#00B2FF';
                statusDiv.innerText = 'Message sent successfully! We will get back to you soon.';
                contactForm.reset();
            } else {
                // If it's the first time submitting, FormSubmit requires email activation
                statusDiv.style.color = '#FF5E00';
                statusDiv.innerHTML = 'Submitted! <br><strong>Note:</strong> If this is your first time, please check your inbox (navnavyaa196@gmail.com) to ACTIVATE the form.';
            }
            
            // Re-enable button
            submitBtn.innerText = 'Send Message';
            submitBtn.disabled = false;
        })
        .catch(error => {
            statusDiv.style.display = 'block';
            statusDiv.style.color = '#FF5E00';
            statusDiv.innerText = 'Oops! There was a problem sending your message. Please try again.';
            
            submitBtn.innerText = 'Send Message';
            submitBtn.disabled = false;
        });
    });
}