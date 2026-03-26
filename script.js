const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        sessionStorage.setItem('indexScrollPos', window.scrollY);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const scrollPos = sessionStorage.getItem('indexScrollPos');
    if (scrollPos) {
        document.documentElement.style.scrollBehavior = 'auto';
        
        window.scrollTo(0, parseInt(scrollPos));
        sessionStorage.removeItem('indexScrollPos');
        
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = '';
        }, 50);
    }
});