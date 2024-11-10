document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Carrocel
    let currentIndex = 0;
    const slider = document.querySelector('.slider');
    const totalItems = document.querySelectorAll('.slider li').length;

    function showSlide(index) {
        if (index >= totalItems) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalItems - 1;
        } else {
            currentIndex = index;
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Set interval to move to the next slide every 3 seconds
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);

    // Add controls
    document.querySelector('.carousel-container::before').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    document.querySelector('.carousel-container::after').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });


