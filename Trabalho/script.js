document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-item').length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel-item').length) % document.querySelectorAll('.carousel-item').length;
        updateCarousel();
    }

    function updateCarousel() {
        const itemWidth = document.querySelector('.carousel-item').offsetWidth;
        carouselContainer.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }


    document.querySelectorAll('.prev-btn').forEach(button => button.addEventListener('click', prevSlide));
    document.querySelectorAll('.next-btn').forEach(button => button.addEventListener('click', nextSlide));
});
