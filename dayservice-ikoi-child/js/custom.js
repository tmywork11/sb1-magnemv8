jQuery(document).ready(function($) {
    // Header scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.site-header').addClass('scrolled');
        } else {
            $('.site-header').removeClass('scrolled');
        }
    });

    // Hero slider
    function initHeroSlider() {
        const $slides = $('.hero-slide');
        let currentSlide = 0;
        const slideCount = $slides.length;

        function showSlide(index) {
            $slides.css('opacity', 0);
            $slides.eq(index).css('opacity', 1);
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slideCount;
            showSlide(currentSlide);
        }

        if (slideCount > 0) {
            showSlide(0);
            setInterval(nextSlide, 5000);
        }
    }

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Initialize components
    initHeroSlider();
});