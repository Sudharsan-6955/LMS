// sec arrow
const leftBtn = document.getElementById("slideLeftBtn");
const rightBtn = document.getElementById("slideRightBtn");
const slider = document.getElementById("slider1");

const scrollAmount = 400; // Adjust scroll amount as needed

rightBtn.addEventListener("click", () => {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

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
document.getElementById('FavBtn7').addEventListener('click', function () {
    showToast('Fav');
});

document.getElementById('CartBtn7').addEventListener('click', function () {
    showToast('Cart');
});
document.getElementById('FavBtn8').addEventListener('click', function () {
    showToast('Fav');
});

document.getElementById('CartBtn8').addEventListener('click', function () {
    showToast('Cart');
});
document.getElementById('FavBtn9').addEventListener('click', function () {
    showToast('Fav');
});

document.getElementById('CartBtn9').addEventListener('click', function () {
    showToast('Cart');
});
document.getElementById('FavBtn10').addEventListener('click', function () {
    showToast('Fav');
});

document.getElementById('CartBtn10').addEventListener('click', function () {
    showToast('Cart');
});
document.getElementById('FavBtn11').addEventListener('click', function () {
    showToast('Fav');
});

document.getElementById('CartBtn11').addEventListener('click', function () {
    showToast('Cart');
});
document.getElementById('FavBtn12').addEventListener('click', function () {
    showToast('Fav');
});

document.getElementById('CartBtn12').addEventListener('click', function () {
    showToast('Cart');
});

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
document.getElementById('FavBtn7').addEventListener('click', () => showToast('successToast'));
document.getElementById('CartBtn7').addEventListener('click', () => showToast('errorToast'));
document.getElementById('FavBtn8').addEventListener('click', () => showToast('successToast'));
document.getElementById('CartBtn8').addEventListener('click', () => showToast('errorToast'));
document.getElementById('FavBtn9').addEventListener('click', () => showToast('successToast'));
document.getElementById('CartBtn9').addEventListener('click', () => showToast('errorToast'));
document.getElementById('FavBtn10').addEventListener('click', () => showToast('successToast'));
document.getElementById('CartBtn10').addEventListener('click', () => showToast('errorToast'));
document.getElementById('FavBtn11').addEventListener('click', () => showToast('successToast'));
document.getElementById('CartBtn11').addEventListener('click', () => showToast('errorToast'));
document.getElementById('FavBtn12').addEventListener('click', () => showToast('successToast'));
document.getElementById('CartBtn12').addEventListener('click', () => showToast('errorToast'));



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
// arrow
const scrollingWrapper = document.querySelector('#slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const cardWidth = scrollingWrapper.querySelector('.card-item').offsetWidth;
const scrollDistance = cardWidth + 10; // card width + margin

rightArrow.addEventListener('click', () => {
    scrollingWrapper.scrollBy({ left: scrollDistance, behavior: 'smooth' });
});

leftArrow.addEventListener('click', () => {
    scrollingWrapper.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
});





// chartts
// document.getElementById('seeMoreBtn').addEventListener('click', function () {
//     const content = document.getElementById('extraContent');
//     if (content.classList.contains('hidden')) {
//         content.classList.remove('hidden');
//         this.textContent = 'See Less';
//         this.style.fontWeight = 'Semi Bold';
//         // Access the element by its ID
//         var element = document.getElementById('seeMoreBtn');
//         element.style.fontWeight = '600';
//     } else {
//         content.classList.add('hidden');
//         this.textContent = 'See More';
//         this.style.fontWeight = 'Semi Bold'; // Revert button text to normal
//         var element = document.getElementById('seeMoreBtn');
//         element.style.fontWeight = '600';
//     }
// });
document.getElementById('seeMore').addEventListener('click', function () {
    const content = document.getElementById('extra');
    const buttonText = this.querySelector('span');
    const icon = this.querySelector('i');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        buttonText.textContent = 'See Less';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        content.classList.add('hidden');
        buttonText.textContent = 'See More';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
});

// nav

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


