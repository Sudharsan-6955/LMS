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