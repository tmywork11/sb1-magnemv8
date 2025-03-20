document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const delay = target.dataset.scrollRevealDelay || 0;
                
                setTimeout(() => {
                    target.classList.add('reveal');
                }, delay);
                
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-scroll-reveal]').forEach(element => {
        observer.observe(element);
    });
});