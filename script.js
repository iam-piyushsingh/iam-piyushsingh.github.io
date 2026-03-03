/* ─── Typewriter ─────────────────────────────────────────── */
const phrases = [
    "Electronics Enthusiast ⚡",
    "Robotics Builder 🤖",
    "3× Science Fair Champion 🏆",
    "Class 9 CBSE Student 📚",
    "Problem Solver 💡",
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const tw = document.getElementById('typewriter-text');

function type() {
    const current = phrases[phraseIdx];
    if (!deleting) {
        tw.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
        tw.textContent = current.slice(0, --charIdx);
        if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 45 : 85);
}
setTimeout(type, 600);

/* ─── Navbar scroll effect ───────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ─── Hamburger menu ─────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ─── Scroll reveal (Intersection Observer) ──────────────── */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => observer.observe(el));

/* ─── Active nav link highlight ──────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-link');
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            links.forEach(l => l.style.color = '');
            const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
            if (active) active.style.color = 'var(--accent-1)';
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => navObserver.observe(s));

/* ─── Lightbox for gallery images ────────────────────────── */
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
const lbImg = document.createElement('img');
lightbox.appendChild(lbImg);
document.body.appendChild(lightbox);

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => {
        e.stopPropagation();
        lbImg.src = img.src;
        lbImg.alt = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
});

/* ─── Smooth staggered reveal for skill pills ────────────── */
document.querySelectorAll('.skill-pill').forEach((pill, i) => {
    pill.style.transitionDelay = `${i * 0.09}s`;
});
