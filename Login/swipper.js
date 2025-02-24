const swiper = new Swiper('.swiper', {
    loop: true, // Enable continuous loop mode
    autoplay: {
      delay: 3000, // Delay between transitions (in milliseconds)
      disableOnInteraction: false, // Continue autoplay after user interactions
    },
    slidesPerView: 1, // Number of slides to show
    spaceBetween: 30, // Space between slides (in pixels)
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Make pagination bullets clickable
    },
    breakpoints: {
      // When window width is >= 1024px
      1024: {
        slidesPerView: 3, // Show 3 slides on larger screens
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2, // Show 3 slides on larger screens
        spaceBetween: 30,
      },
    },
  });

  
const slider = document.getElementById('slider');
let cardWidth = document.querySelector('.card-item').offsetWidth + 15; // Card width + gap

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    clearInterval(autoScrollInterval); // Pause auto-scroll on user interaction
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    autoScrollInterval = setInterval(autoScroll, 3000); // Resume auto-scroll
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX); // Scroll by the mouse movement

    // Only move a single card distance, scroll smoothly
    const newScrollLeft = scrollLeft - walk;
    if (Math.abs(newScrollLeft - slider.scrollLeft) > cardWidth) {
        slider.scrollTo({
            left: Math.round(newScrollLeft / cardWidth) * cardWidth,
            behavior: 'smooth',
        });
        scrollLeft = newScrollLeft;
    }
});

function autoScroll() {
    // Calculate the new scroll position
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft >= maxScrollLeft) {
        // If we've reached the end, scroll back to the beginning
        slider.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    } else {
        // Otherwise, scroll to the next card
        slider.scrollTo({
            left: slider.scrollLeft + cardWidth,
            behavior: 'smooth'
        });
    }
}

// Start automatic scrolling
let autoScrollInterval = setInterval(autoScroll, 3000);

window.addEventListener('resize', () => {
    // Update card width when window is resized
    cardWidth = document.querySelector('.card-item').offsetWidth + 15;
});


