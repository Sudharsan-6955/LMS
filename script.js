// button
document.getElementById('FavBtn1').addEventListener('click', function () {
    showToast('Fav');
});
document.getElementById('CartBtn1').addEventListener('click', function () {
    showToast('Cart');
});
document.getElementById('FavBtn2').addEventListener('click', function () {
    showToast('Fav');
});
document.getElementById('CartBtn2').addEventListener('click', function () {
    showToast('Cart');
});
document.getElementById('FavBtn3').addEventListener('click', function () {
    showToast('Fav');
});
document.getElementById('CartBtn3').addEventListener('click', function () {
    showToast('Cart');
});
document.getElementById('FavBtn4').addEventListener('click', function () {
    showToast('Fav');
});

document.getElementById('CartBtn4').addEventListener('click', function () {
    showToast('Cart');
});
document.getElementById('FavBtn5').addEventListener('click', function () {
    showToast('Fav');
});

document.getElementById('CartBtn5').addEventListener('click', function () {
    showToast('Cart');
});
document.getElementById('FavBtn6').addEventListener('click', function () {
    showToast('Fav');
});

document.getElementById('CartBtn6').addEventListener('click', function () {
    showToast('Cart');
});

function showToast(toastId) {
    const toast = document.getElementById(toastId);
    toast.classList.remove('hidden', 'slide-out');
    toast.classList.add('slide-in');

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.classList.replace('slide-in', 'slide-out');
        // After animation ends, hide the toast
        toast.addEventListener('animationend', () => {
            toast.classList.add('hidden');
        }, { once: true });
    }, 3000);
}
document.getElementById('FavBtn1').addEventListener('click', () => showToast('successToast'));
document.getElementById('CartBtn1').addEventListener('click', () => showToast('errorToast'));
document.getElementById('FavBtn2').addEventListener('click', () => showToast('successToast'));
document.getElementById('CartBtn2').addEventListener('click', () => showToast('errorToast'));
document.getElementById('FavBtn3').addEventListener('click', () => showToast('successToast'));
document.getElementById('CartBtn3').addEventListener('click', () => showToast('errorToast'));
document.getElementById('FavBtn4').addEventListener('click', () => showToast('successToast'));
document.getElementById('CartBtn4').addEventListener('click', () => showToast('errorToast'));
document.getElementById('FavBtn5').addEventListener('click', () => showToast('successToast'));
document.getElementById('CartBtn5').addEventListener('click', () => showToast('errorToast'));
document.getElementById('FavBtn6').addEventListener('click', () => showToast('successToast'));
document.getElementById('CartBtn6').addEventListener('click', () => showToast('errorToast'));


const slides = document.querySelectorAll(".carousel-item");
let currentIndex = 0;
let intervalId;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
}

// Start Auto Slide
function startAutoSlide() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }, 2000); // Change slide every 3 seconds
}

// Stop Auto Slide
function stopAutoSlide() {
    clearInterval(intervalId);
}

// Previous Slide
document.getElementById("prev").addEventListener("click", () => {
    stopAutoSlide(); // Stop auto-slide when manually navigating
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
    startAutoSlide(); // Restart auto-slide after manual navigation
});

// Next Slide
document.getElementById("next").addEventListener("click", () => {
    stopAutoSlide();
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
    startAutoSlide();
});

// Pause on Hover
const carouselElement = document.getElementById("carousel");
carouselElement.addEventListener("mouseover", stopAutoSlide);
carouselElement.addEventListener("mouseout", startAutoSlide);

// Initialize Auto Slide
startAutoSlide()






document.addEventListener("DOMContentLoaded", function () {
    const openDrawer = document.getElementById("open-drawer");
    const navDrawer = document.getElementById("nav-drawer");
    const closeDrawer = document.getElementById("close-drawer");

    openDrawer.addEventListener("click", function () {
        navDrawer.classList.add("open"); // Slide in
    });

    closeDrawer.addEventListener("click", function () {
        navDrawer.classList.remove("open"); // Slide out
    });

    // Optional: Click outside to close
    document.addEventListener("click", function (event) {
        if (!navDrawer.contains(event.target) && !openDrawer.contains(event.target)) {
            navDrawer.classList.remove("open");
        }
    });
});